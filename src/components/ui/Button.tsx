'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer';

  const variants = {
    gold: 'bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#E8C84A] shadow-[0_4px_20px_rgba(212,175,55,0.3)]',
    outline: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]',
    ghost: 'text-[#A0A0A0] hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.05)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button className={[base, variants[variant], sizes[size], className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  );
}
