// src/components/theme/ClientThemeProvider.tsx
import { useEffect, useState } from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ClientThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        {mounted && (
          <div className="fixed top-4 right-6 z-[100]">
            <ThemeToggle />
          </div>
        )}
        {children}
      </div>
    </ThemeProvider>
  );
}