'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function GlassContainer({
  children,
  className,
  as: Tag = 'div',
}: GlassContainerProps) {
  return (
    <Tag
      className={cn(
        'backdrop-blur-xl border rounded-2xl',
        'bg-[rgba(22,22,22,0.7)] border-[rgba(212,175,55,0.2)]',
        className
      )}
    >
      {children}
    </Tag>
  );
}
