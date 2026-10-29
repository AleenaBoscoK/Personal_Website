import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const signage = Barlow_Condensed({ variable: "--font-signage", weight: "500", subsets: ["latin"] });

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  title: `${fullName} — ML & AI Engineer`,
  description: profile.pitch,
  openGraph: {
    title: `${fullName} — ML & AI Engineer`,
    description: profile.pitch,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} ${signage.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
