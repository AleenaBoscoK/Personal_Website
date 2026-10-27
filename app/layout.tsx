import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

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
      className={`${newsreader.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}