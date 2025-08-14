import React from "react";
import Link from "next/link";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-blue-500/20 py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <FileText className="w-7 h-7 text-blue-400" />
          <span className="text-xl font-bold text-foreground">ResumeAI</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/dashBoard" className="hover:text-blue-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-blue-400 transition-colors">
            Login
          </Link>
          <a href="mailto:support@resumeai.com" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/Ahmedsamehm" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ahmedsamehazouz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/3z0oo0z_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Create by Ahmed Sameh</div>
    </footer>
  );
};

export default Footer;
