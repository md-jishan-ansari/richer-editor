// File: src/components/ui/CustomPopover.tsx
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { cn } from "@/lib/utils";

// Import CSS inside the component so it is bundled
import './CustomPopover.css';

interface CustomPopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  anchorEl: HTMLElement | null;
  children: React.ReactNode;
  className?: string;
  closeButton?: boolean;
  onEsc?: () => void;
}

const CustomPopover: React.FC<CustomPopoverProps> = ({ open, onOpenChange, anchorEl, children, className, closeButton, onEsc }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [open, anchorEl]);

  // Dynamically adjust left position after popover renders to prevent right overflow
  useLayoutEffect(() => {
    if (open && popoverRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect();
      let left = position.left;
      if (popoverRect.right > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - popoverRect.width - 8);
        setPosition(pos => ({ ...pos, left }));
      }
    }
  }, [open, position.left]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node) && anchorEl && !anchorEl.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (onEsc) onEsc();
        else onOpenChange(false);
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
  }, [open, onOpenChange, anchorEl, onEsc]);

  if (!open || !anchorEl) return null;
  return ReactDOM.createPortal(
    <div
      ref={popoverRef}
      className={cn("richer-editor-popover", className)}
      style={{ top: position.top, left: position.left, position: 'absolute', zIndex: 1000 }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      {closeButton && (
        <button
          className="richer-editor-closeBtn"
          aria-label="Close"
          onClick={() => onOpenChange(false)}
          style={{ position: 'absolute', top: 8, right: 8 }}
        >
          ×
        </button>
      )}
      {children}
    </div>,
    document.body
  );
};

export default CustomPopover;