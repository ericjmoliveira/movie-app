import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className="m-4 md:m-8">{children}</main>;
}
