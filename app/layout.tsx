import "./globals.css";
import { ThemeProvider } from "./components/themeProvider";
import BackGroundDots from "./components/BackGroundDots";

import { Toaster } from "sonner";
import QueryProvider from "./components/QueryProvider";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <QueryProvider>
            <BackGroundDots />
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

            <main className="pt-16">{children}</main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
