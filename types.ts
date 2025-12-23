export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  target?: string;
  className?: string;
}