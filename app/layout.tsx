import type { Metadata } from "next";
import { Fredoka, Mukta_Mahee } from "next/font/google";
import Sidebar from "@/components/shared/Sidebar";
import TopBar from "@/components/shared/TopBar";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const muktaMahee = Mukta_Mahee({
  variable: "--font-mukta-mahee",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plenty Admin",
  description: "Plenty admin dashboard demo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${muktaMahee.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans">
        <Sidebar />
        <div className="flex flex-1 flex-col min-w-0">
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  );
}
