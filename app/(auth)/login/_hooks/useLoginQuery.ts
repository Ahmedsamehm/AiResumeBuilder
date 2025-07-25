"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { loginUser, LoginResponse, getAuthUser, logOutUser, signInWithGoogle } from "../_services/authServices";
import { User } from "../_types/User.type";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetUseQuery = () => {
  const {
    data: user,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["auth-user"],
    queryFn: getAuthUser,
    refetchOnWindowFocus: false,
  });

  return { user, isLoading, isPending };
};

const useLoginQuery = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending: isLogin,
    isSuccess,
    isError,
    error,
    data,
    context,
  } = useMutation<LoginResponse, Error, User>({
    mutationFn: (userData: User) => loginUser(userData),
    onSuccess: (data) => {
      toast.success("login Success");
      queryClient.invalidateQueries({ queryKey: ["auth-user"] });

      router.push("/");
    },
    onError: (error) => {
      toast.error("login failed");
      console.error("Login failed:", error.message);
    },
  });

  return {
    login,
    isLogin,
    isSuccess,
    isError,
    error,
    data,
    context,
  };
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: Logout, isPending: isLogout } = useMutation({
    mutationFn: logOutUser,

    onSuccess: () => {
      toast.success("Logout successfully");
      queryClient.clear();

      queryClient.invalidateQueries({ queryKey: ["auth-user"] });

      router.push("/login");
    },
    onError: (error) => {
      toast.error("Logout failed");
      console.error("Logout failed:", error);
    },
  });
  return { Logout, isLogout };
};

export const useGoogleLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    mutate: loginWithGoogle,
    isPending: isGoogleLogin,
    isError: isGoogleError,
    error: googleError,
  } = useMutation({
    mutationFn: (idToken: string) => {
      return signInWithGoogle(idToken);
    },
    onSuccess: (data) => {
      toast.success("Google login successfully");
      queryClient.invalidateQueries({ queryKey: ["auth-user"] });

      router.push("/");
    },
    onError: (error) => {
      toast.error("Google login failed");
      console.error("Google login failed:", error.message);
    },
  });

  return { loginWithGoogle, isGoogleLogin, isGoogleError, googleError };
};

export { useLoginQuery };
