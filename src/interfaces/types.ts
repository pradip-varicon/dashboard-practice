export interface UserType {
  token: string;
  refreshToken: string;
  username: string;
}

export interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  loading: boolean;
}
