// File: src/components/ui/CustomDropdown.tsx
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { cn } from "@/lib/utils";

// Import CSS inside the component so it is bundled
import './CustomDropdown.css';

interface CustomDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  width?: string;
}

const DEFAULT_WIDTH = 320;

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  open,
  onOpenChange,
  trigger,
  children,
  className,
  align = 'left',
  width = `${DEFAULT_WIDTH}px`
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      let dropdownWidth = DEFAULT_WIDTH;
      if (dropdownRef.current) {
        dropdownWidth = dropdownRef.current.offsetWidth || DEFAULT_WIDTH;
      } else if (width && typeof width === 'string' && width.endsWith('px')) {
        dropdownWidth = parseInt(width);
      }
      let left = rect.left;
      // Prevent overflow right
      if (left + dropdownWidth > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - dropdownWidth - 8);
      }
      // Prevent overflow left
      if (left < 8) {
        left = 8;
      }
      setPosition({
        top: rect.bottom + 4,
        left,
      });
    }
  }, [open, width]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <>
      <div className="richer-editor-dropdown-container" ref={triggerRef}>
        {React.cloneElement(trigger as React.ReactElement, {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            onOpenChange(!open);
          }
        })}
      </div>
      {open && ReactDOM.createPortal(
        <div
          ref={dropdownRef}
          className={cn(
            "richer-editor-dropdown",
            `richer-editor-dropdown-${align}`,
            className
          )}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width,
            zIndex: 1000
          }}
        >
          <button
            className="richer-editor-dropdown-closeBtn"
            aria-label="Close"
            onClick={() => onOpenChange(false)}
            style={{ position: 'absolute', top: 8, right: 8 }}
          >
            ×
          </button>
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default CustomDropdown;