import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  yPadding?: string;
};

const Section = ({ children, yPadding = 'py-16' }: SectionProps) => (
  <div className={yPadding}>
    {children}
  </div>
);

export { Section };
