import { currentUser } from "@clerk/nextjs/server";
import { supabase } from "./supabase_client";

export const UserDetail = async () => {
  const query = supabase.from("Users");
  const user = await currentUser();

  const email = user?.emailAddresses[0].emailAddress;

  const { data: User, error } = await query.select("*").eq("email", email);

  if (error) {
    console.log(error);
    throw new Error("Error fetching the user detail from supabase");
  }

  return User.at(0);
};
