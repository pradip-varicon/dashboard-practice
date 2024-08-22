export interface UserType {
  token: string;
  refreshToken: string;
  username: string;
}

export interface AuthContextType {
  user: UserType | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}
