import { Auth0Provider } from "@auth0/nextjs-auth0";
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "AI Resume Feedback",
  description: "Get smart feedback and ATS scores for your resume",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Auth0Provider>
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}