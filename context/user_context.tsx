import { createContext, useContext } from "react";
import { Tables } from "@/types/supabase";

export type UserType = Tables<"Users">;

interface UserDetailContextType {
  userDetail: UserType | null;
  setUserDetail: React.Dispatch<React.SetStateAction<UserType | null>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: null,
  setUserDetail: () => null,
});

export function useUser() {
  const context = useContext(UserDetailContext);
  if (context === null) {
    throw new Error("UserContext is null. Ensure you are using the provider.");
  }
  return context;
}
