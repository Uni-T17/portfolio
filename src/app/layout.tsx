import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { site } from "@/content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: set to the real deployed domain
  metadataBase: new URL("https://tayzartun.vercel.app"),
  title: {
    default: `${site.name} — Fullstack Developer & UI/UX Designer`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Tay Zar Tun",
    "Fullstack Developer",
    "UI/UX Designer",
    "Software Engineer",
    "React",
    "Next.js",
    "Chiang Rai",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.name} — Fullstack Developer & UI/UX Designer`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/profile.jpeg", width: 1179, height: 1500, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Fullstack Developer & UI/UX Designer`,
    description: site.description,
    images: ["/profile.jpeg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f8ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1410" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
