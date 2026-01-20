import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Saas Teaching",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${bricolage.variable} antialiased'}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#222873' }} } publishableKey ={'pk_test_d2VsbC1lc2NhcmdvdC0xOS5jbGVyay5hY2NvdW50cy5kZXYk'}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
