import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from '@/components/theme-provider'
import { Providers } from "@/lib/providers";
import Navbar from "@/components/global/Navbar";
import React from "react";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <ThemeProvider
            enableSystem
            disableTransitionOnChange
            attribute="class"
            defaultTheme="system">
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
