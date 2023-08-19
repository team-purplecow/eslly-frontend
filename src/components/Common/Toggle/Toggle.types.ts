import { HTMLAttributes } from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: [string, string];
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChecked?: (value: boolean) => void;
}
