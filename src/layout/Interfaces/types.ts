export interface NavItem {
  text: string;
  icon: JSX.Element;
  path?: string;
  subNav?: { text: string; path: string }[];
}

export type Width = number;

export type LogoSrc = string;