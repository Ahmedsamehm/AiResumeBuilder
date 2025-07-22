"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "./shared/ui/button";
import { FileText, User, LogIn, LogOut, Menu, X } from "lucide-react";

import { useGetUseQuery, useLogout } from "../(auth)/login/_hooks/useLoginQuery";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useGetUseQuery();
  const { Logout, isLogout } = useLogout();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ResumeAI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashBoard" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                </Link>
                <Button disabled={isLogout} onClick={() => Logout()} size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 border-white/20">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md">
              {user ? (
                <>
                  <Link href="/dashBoard" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                  <Button disabled={isLogout} onClick={() => Logout()} variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 border-white/20">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/login" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
