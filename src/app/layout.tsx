import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, DM_Sans } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakshith Kumar K.N · Senior AI/ML Engineer",
  description: "AI/ML Engineer specialising in Generative AI, multi-agent systems, and large-scale cloud infrastructure. 5+ years shipping production AI.",
  keywords: ["AI Engineer", "ML Engineer", "Generative AI", "LangGraph", "GraphRAG", "AWS Bedrock", "PyTorch"],
  authors: [{ name: "Rakshith Kumar K.N" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🟠</text></svg>",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${dmSans.variable} antialiased bg-[#0A0603] text-[#FFF3E2]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
