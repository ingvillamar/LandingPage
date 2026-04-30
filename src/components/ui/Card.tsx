'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#161616] border border-[rgba(212,175,55,0.1)] rounded-2xl overflow-hidden',
        hover && 'transition-all duration-300 hover:border-[rgba(212,175,55,0.3)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]',
        className
      )}
    >
      {children}
    </div>
  );
}
