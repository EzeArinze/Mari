import { supabase } from "@/services/supabase_client";
import { currentUser } from "@clerk/nextjs/server";
import React, { ReactNode } from "react";

async function Provider({ children }: { children: ReactNode }) {
  const user = await currentUser();

  const email = user?.emailAddresses[0].emailAddress;

  if (user) await CreateNewUser();

  async function CreateNewUser() {
    const query = supabase.from("Users");

    const { data: Users, error } = await query.select("*").eq("email", email);

    if (error) {
      console.log(error);
      return;
    }

    if (Users?.length === 0) {
      /* eslint-disable */
      const { data, error } = await query
        .insert([{ name: user?.fullName, email }])
        .select();
    }
  }

  return <main className="w-full min-h-dvh">{children}</main>;
}

export default Provider;

// "use client";
// import { UserDetailContext, UserType } from "@/context/user_context";
// import { supabase } from "@/services/supabase_client";
// import { useUser } from "@clerk/nextjs";
// import React, { ReactNode, useEffect, useState } from "react";

// function Provider({ children }: { children: ReactNode }) {
//   const [userDetail, setUserDetail] = useState<UserType | null>(null);
//   const { user } = useUser();

//   console.log(userDetail);

//   const email = user?.emailAddresses[0].emailAddress;

//   async function CreateNewUser() {
//     const query = supabase.from("Users");

//     const { data: Users, error } = await query.select("*").eq("email", email);
//     setUserDetail(Users?.at(0));

//     if (error) {
//       console.log(error);
//       return;
//     }

//     if (Users?.length === 0) {
//       /* eslint-disable */
//       const { data, error } = await query
//         .insert([{ name: user?.fullName, email }])
//         .select();

//       setUserDetail(data?.at(0));
//     }
//   }

//   useEffect(() => {
//     if (user) {
//       CreateNewUser();
//     }
//   }, [user]);

//   return (
//     <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
//       <main className="w-full min-h-dvh">{children}</main>
//     </UserDetailContext.Provider>
//   );
// }

// export default Provider;
