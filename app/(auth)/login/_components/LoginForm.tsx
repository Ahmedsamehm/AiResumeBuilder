"use client";

import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { User } from "../_types/User.type";
import { Button } from "@/app/components/shared/ui/button";
import { Input } from "@/app/components/shared/ui/input";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useGoogleLogin, useLoginQuery } from "../_hooks/useLoginQuery";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/shared/ui/card";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLogin, isError, error } = useLoginQuery();
  const { loginWithGoogle, isGoogleLogin, isGoogleError, googleError } = useGoogleLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    login(data);
  };

  // Handle Google Sign-In callback
  const handleSignInWithGoogle = async (response: any) => {
    try {
      const idToken = response.credential;

      if (idToken) loginWithGoogle(idToken);
    } catch (error) {
      console.error("Google login failed:", googleError);
    }
  };

  // Make handleSignInWithGoogle available globally
  useEffect(() => {
    (window as any).handleSignInWithGoogle = handleSignInWithGoogle;

    // Load Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      delete (window as any).handleSignInWithGoogle;
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-sm md:w-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl ">Welcome Back</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="loginForm" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`pr-10 ${errors.password ? "border-destructive" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
            </div>

            {isError && (
              <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3">
                <p className="text-sm text-destructive">{error?.message || "Login failed. Please try again."}</p>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" form="loginForm" disabled={isLogin} className="w-full" size="lg">
            {isLogin ? <LoadingSpinner /> : "Sign In"}
          </Button>

          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <div className="w-full flex justify-center">
            <div
              id="g_id_onload"
              data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              data-context="signin"
              data-ux_mode="popup"
              data-callback="handleSignInWithGoogle"
              data-nonce=""
              data-auto_select="false"
              data-itp_support="true"
              data-use_fedcm_for_prompt="true"
            ></div>

            <div className="g_id_signin" data-type="standard" data-shape="pill" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left"></div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
