'use client';

import { useState, type FormEvent } from 'react';

const NEEDS = [
  'Brand Strategy',
  'Visual Identity',
  'Product & Web',
  'Go-to-Market',
  'Not sure yet',
] as const;

const BUDGETS = ['< $25k', '$25k — $75k', '$75k — $150k', '$150k+'] as const;

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Exploring'] as const;

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function FieldLabel({
  children,
  required,
}: {
  children: string;
  required?: boolean;
}) {
  return (
    <label className="font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
      {children}
      {required ? <span className="text-vermilion"> *</span> : null}
    </label>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-contact-chip
      className={`rounded-md border px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors ${
        selected
          ? 'border-paper bg-paper text-ink'
          : 'border-white/20 bg-transparent text-ink-200 hover:border-white/40 hover:text-paper'
      }`}
    >
      {label}
    </button>
  );
}

/**
 * Inquiry form — reference layout on dark ink.
 */
export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [need, setNeed] = useState<string>('Brand Strategy');
  const [budget, setBudget] = useState<string>('$25k — $75k');
  const [timeline, setTimeline] = useState<string>('1–3 months');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const reset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setWebsite('');
    setNeed('Brand Strategy');
    setBudget('$25k — $75k');
    setTimeline('1–3 months');
    setMessage('');
    setStatus('idle');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // UI-only for now — wire to an API later.
    setStatus('sent');
  };

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <FieldLabel required>Your name</FieldLabel>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"
          />
        </div>

        <div className="flex flex-col gap-3">
          <FieldLabel required>Email</FieldLabel>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"
          />
        </div>

        <div className="flex flex-col gap-3">
          <FieldLabel required>Company</FieldLabel>
          <input
            required
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
            className="border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"
          />
        </div>

        <div className="flex flex-col gap-3">
          <FieldLabel>Website (optional)</FieldLabel>
          <input
            type="url"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://"
            className="border-0 border-b border-white/25 bg-transparent py-2 text-[0.95rem] text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"
          />
        </div>
      </div>

      <fieldset className="mt-12 border-0 p-0">
        <legend className="font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
          What do you need?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {NEEDS.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={need === option}
              onClick={() => setNeed(option)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0 p-0">
        <legend className="font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
          Budget
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {BUDGETS.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={budget === option}
              onClick={() => setBudget(option)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0 p-0">
        <legend className="font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
          Timeline
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {TIMELINES.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={timeline === option}
              onClick={() => setTimeline(option)}
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-12 flex flex-col gap-3">
        <FieldLabel>Tell us about the project (optional)</FieldLabel>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="The problem you're trying to solve, the ambition, and what success looks like."
          className="resize-y rounded-md border border-white/20 bg-transparent px-4 py-3 text-[0.95rem] leading-relaxed text-paper outline-none transition-colors placeholder:text-ink-400 focus:border-vermilion"
        />
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-200 uppercase">
          {status === 'sent'
            ? 'Thanks — we\'ll be in touch.'
            : 'We respond within 48 hours'}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={reset}
            data-contact-chip
            className="rounded-md border border-white/25 px-5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-ink-200 uppercase transition-colors hover:border-white/45 hover:text-paper"
          >
            Cancel
          </button>
          <button
            type="submit"
            data-contact-submit
            className="inline-flex items-center gap-2 rounded-md bg-[#E8B4A2] px-5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-90"
          >
            Send inquiry
            <ArrowIcon />
          </button>
        </div>
      </div>
    </form>
  );
}
