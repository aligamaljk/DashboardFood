export interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[];
  icon?: JSX.Element;
}

export interface UserState {
  user: string | null;
  token: string | null;
  dark: boolean;
}
