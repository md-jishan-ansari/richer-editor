// File: src/components/ui/CustomPopover.tsx
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './CustomPopover.css';
import { cn } from "@/lib/utils";

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
      className={cn("popover", className)}
      style={{ top: position.top, left: position.left, position: 'absolute', zIndex: 1000 }}
      tabIndex={-1}
      role="dialog"
    >
      {closeButton && (
        <button
          className="closeBtn"
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