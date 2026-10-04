"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { lockScroll } from "@/lib/scroll";
import { CloseIcon } from "./Icons";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, label, children, className = "" }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      lockScroll(true);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
    lockScroll(false);
    const timeout = setTimeout(() => setMounted(false), 400);
    return () => clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={`fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${
        visible ? "bg-ink/80 backdrop-blur-sm opacity-100" : "bg-ink/0 opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        onClick={(event) => event.stopPropagation()}
        className={`relative w-full max-h-[90vh] overflow-y-auto rounded-lg border border-[var(--border)] bg-surface transition-all duration-500 ease-out ${
          visible ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"
        } ${className}`}
      >
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full border border-[var(--border)] bg-ink/70 text-paper hover:border-accent hover:text-accent transition-colors"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
