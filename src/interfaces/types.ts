export interface UserType {
  token: string;
  refreshToken: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
