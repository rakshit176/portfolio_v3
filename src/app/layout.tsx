import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakshith Kumar K.N · Senior AI/ML Engineer",
  description: "AI/ML Engineer specialising in Generative AI, multi-agent systems, and large-scale cloud infrastructure. 5+ years shipping production AI.",
  keywords: ["AI Engineer", "ML Engineer", "Generative AI", "LangGraph", "GraphRAG", "AWS Bedrock", "PyTorch"],
  authors: [{ name: "Rakshith Kumar K.N" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🟣</text></svg>",
  },
  openGraph: {
    title: "Rakshith Kumar K.N · Senior AI/ML Engineer",
    description: "AI/ML Engineer specialising in Generative AI, multi-agent systems, and large-scale cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e1a] text-[#F8FAFC]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
