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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-lift transition-smooth">
            <FileText className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">ResumeAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashBoard">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth" onClick={() => Logout()} disabled={isLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth hover-lift">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground transition-smooth">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border card-professional mt-2 mb-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                <>
                  <Link
                    href="/dashBoard"
                    className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
                    onClick={() => {
                      Logout();
                      setIsMobileMenuOpen(false);
                    }}
                    disabled={isLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <LogIn className="w-4 h-4" />
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
