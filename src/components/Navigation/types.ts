import { JSX } from 'react';

export interface INavigationLink {
  to: string;
  text: string;
  isActive?: boolean;
  icon?: JSX.Element;
}
