import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"; 

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Engine",
  description: "Generative AI for Organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
