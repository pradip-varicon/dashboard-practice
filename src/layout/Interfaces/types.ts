export interface NavItem {
  text: string;
  icon: JSX.Element;
  path?: string;
  subNav?: { text: string; path: string }[];
}
