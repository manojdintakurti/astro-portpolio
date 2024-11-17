// src/types/common.ts
import type { ReactNode } from 'react';

export interface BaseProps {
  children: ReactNode;
  className?: string;
}

export interface AnimationProps extends BaseProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideIn';
  delay?: number;
}

export interface ThemeProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}