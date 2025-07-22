import { createClient } from "@/lib/supaBase/Server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const ProtectedRoutes = async ({ children }: { children: React.ReactNode }): Promise<React.ReactNode> => {
  const cookieStore = await cookies();
  const supabase = await createClient();
  const userToken = cookieStore.get("sb-access-token")?.value;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !userToken) {
    redirect("/login");
  }

  return children;
};

export default ProtectedRoutes;
