'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={[
        'w-full bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3',
        'text-[#F5F5F0] placeholder-[#555] text-sm',
        'focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[rgba(212,175,55,0.3)]',
        'transition-all duration-200',
        className
      ].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
