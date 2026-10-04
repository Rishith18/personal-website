"use client";

import Modal from "./Modal";
import { profile } from "@/data/site";
import { ArrowUpRight } from "./Icons";

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} label={`${profile.name} resume`} className="max-w-4xl">
      <div className="flex items-center justify-between gap-4 px-6 py-5 pr-20 border-b border-[var(--border)]">
        <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">Resume</p>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
        >
          Open in new tab <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
      <iframe
        src={profile.resume}
        title={`${profile.name} resume`}
        className="w-full h-[75vh] bg-paper"
      />
    </Modal>
  );
}
