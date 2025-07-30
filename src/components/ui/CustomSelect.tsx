// File: src/components/ui/CustomSelect.tsx
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './CustomSelect.css';
import { cn } from "@/lib/utils";
import ExpandIcon from '@/icons/ExpandIcon';

interface Option {
  value: string;
  label: React.ReactNode;
}

interface CustomSelectProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
  placeholder?: any; // e.g. 'Font Size', 'Font Family', etc.
  label?: string; // for accessibility and visual clarity
  title?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, options, onChange, className, placeholder, label, title }) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{top: number, left: number, width: number}>({top: 0, left: 0, width: 0});
  const [positionAbove, setPositionAbove] = useState(false);

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      // Calculate available space below and above
      const spaceBelow = window.innerHeight - rect.bottom - 8; // 8px margin
      const spaceAbove = rect.top - 8; // 8px margin

      // Estimate dropdown height based on number of options
      const optionHeight = 32; // Approximate height per option
      const maxVisibleOptions = 8; // Max options to show before scrolling
      const estimatedDropdownHeight = Math.min(options.length * optionHeight, maxVisibleOptions * optionHeight) + 16; // +16 for padding

      // Determine if we should position above or below
      const shouldPositionAbove = spaceBelow < estimatedDropdownHeight && spaceAbove > estimatedDropdownHeight;
      setPositionAbove(shouldPositionAbove);

      const top = shouldPositionAbove
        ? rect.top + window.scrollY - estimatedDropdownHeight - 4 // 4px gap above
        : rect.bottom + window.scrollY + 4; // 4px gap below

      setDropdownPos({
        top,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  }, [open, options.length]);

  useEffect(() => {
    if (open && listRef.current && highlighted >= 0) {
      const el = listRef.current.children[highlighted] as HTMLElement;
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [open, highlighted]);

  useEffect(() => {
    if (!open) setHighlighted(-1);
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        listRef.current &&
        !listRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleResize() {
      // Recalculate position on window resize
      if (open && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();

        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const spaceAbove = rect.top - 8;

        const optionHeight = 32;
        const maxVisibleOptions = 8;
        const estimatedDropdownHeight = Math.min(options.length * optionHeight, maxVisibleOptions * optionHeight) + 16;

        const shouldPositionAbove = spaceBelow < estimatedDropdownHeight && spaceAbove > estimatedDropdownHeight;
        setPositionAbove(shouldPositionAbove);

        const top = shouldPositionAbove
          ? rect.top + window.scrollY - estimatedDropdownHeight - 4
          : rect.bottom + window.scrollY + 4;

        setDropdownPos({
          top,
          left: rect.left + window.scrollX,
          width: rect.width
        });
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [open, options.length]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        setOpen(true);
        setHighlighted(0);
        e.preventDefault();
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      setHighlighted(h => Math.min(h + 1, options.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setHighlighted(h => Math.max(h - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (highlighted >= 0) {
        onChange(options[highlighted].value);
        setOpen(false);
      }
      e.preventDefault();
    } else if (e.key === 'Escape') {
      setOpen(false);
      e.preventDefault();
    }
  }

  function handleOptionClick(idx: number) {
    onChange(options[idx].value);
    setOpen(false);
  }

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className={cn("richer-editor-selectWrapper", className)}
      tabIndex={0}
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      style={{display: 'inline-block'}}
    >
      {label && <div className="richer-editor-label">{label}</div>}
      <button
        ref={triggerRef}
        className="richer-editor-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={handleKeyDown}
        type="button"
        title={title || ""}
      >
        <span className={selectedOption ? undefined : "richer-editor-placeholder"}>
          {selectedOption ? selectedOption.label : placeholder || 'Select...'}
        </span>
        <span className="richer-editor-chevron" aria-hidden>
          <ExpandIcon size={18} />
        </span>
      </button>
      {open && ReactDOM.createPortal(
        <ul
          className={cn(
            "richer-editor-options",
            positionAbove && "richer-editor-options-above"
          )}
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          style={{
            position: 'absolute',
            top: dropdownPos.top,
            left: dropdownPos.left,
            minWidth: dropdownPos.width,
            maxWidth: 200,
            zIndex: 2000
          }}
        >
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              className={
                `richer-editor-option${value === opt.value ? " richer-editor-selected" : ''}${highlighted === idx ? " richer-editor-highlighted" : ''}`
              }
              role="option"
              aria-selected={value === opt.value}
              onMouseDown={e => { e.preventDefault(); handleOptionClick(idx); }}
              onMouseEnter={() => setHighlighted(idx)}
            >
              {opt.label}
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
};

export default CustomSelect;