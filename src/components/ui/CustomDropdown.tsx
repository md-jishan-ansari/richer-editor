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
  const [positionAbove, setPositionAbove] = useState(false);

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      let dropdownWidth = DEFAULT_WIDTH;
      if (dropdownRef.current) {
        dropdownWidth = dropdownRef.current.offsetWidth || DEFAULT_WIDTH;
      } else if (width && typeof width === 'string' && width.endsWith('px')) {
        dropdownWidth = parseInt(width);
      }

      // Calculate available space below and above
      const spaceBelow = window.innerHeight - rect.bottom - 8; // 8px margin
      const spaceAbove = rect.top - 8; // 8px margin

      // Estimate dropdown height (you can adjust this based on your content)
      let estimatedDropdownHeight = 300; // Default estimate

      // If dropdown is already rendered, use its actual height
      if (dropdownRef.current) {
        estimatedDropdownHeight = dropdownRef.current.offsetHeight;
      }

      // Determine if we should position above or below
      const shouldPositionAbove = spaceBelow < estimatedDropdownHeight && spaceAbove > estimatedDropdownHeight;
      setPositionAbove(shouldPositionAbove);

      let left = rect.left;
      // Prevent overflow right
      if (left + dropdownWidth > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - dropdownWidth - 8);
      }
      // Prevent overflow left
      if (left < 8) {
        left = 8;
      }

      // Position above or below based on available space
      const top = shouldPositionAbove
        ? rect.top - estimatedDropdownHeight - 4 // 4px gap above
        : rect.bottom + 4; // 4px gap below

      setPosition({
        top,
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

    function handleResize() {
      // Recalculate position on window resize
      if (open && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        let dropdownWidth = DEFAULT_WIDTH;
        if (dropdownRef.current) {
          dropdownWidth = dropdownRef.current.offsetWidth || DEFAULT_WIDTH;
        } else if (width && typeof width === 'string' && width.endsWith('px')) {
          dropdownWidth = parseInt(width);
        }

        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const spaceAbove = rect.top - 8;

        let estimatedDropdownHeight = 300;
        if (dropdownRef.current) {
          estimatedDropdownHeight = dropdownRef.current.offsetHeight;
        }

        const shouldPositionAbove = spaceBelow < estimatedDropdownHeight && spaceAbove > estimatedDropdownHeight;
        setPositionAbove(shouldPositionAbove);

        let left = rect.left;
        if (left + dropdownWidth > window.innerWidth - 8) {
          left = Math.max(8, window.innerWidth - dropdownWidth - 8);
        }
        if (left < 8) {
          left = 8;
        }

        const top = shouldPositionAbove
          ? rect.top - estimatedDropdownHeight - 4
          : rect.bottom + 4;

        setPosition({
          top,
          left,
        });
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [open, onOpenChange, width]);

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
            positionAbove && "richer-editor-dropdown-above",
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