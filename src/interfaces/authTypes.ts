export interface UserType {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface AuthContextType {
  user: UserType | null | undefined;
  isAuthLoading: boolean;
  isError: boolean;
}
