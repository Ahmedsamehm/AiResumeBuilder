import "./globals.css";
import { ThemeProvider } from "./components/themeProvider";

import { Toaster } from "sonner";
import QueryProvider from "./components/QueryProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <QueryProvider>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "var(--background)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                },
              }}
            />
            <SpeedInsights />
            <main className="pt-16">{children}</main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
