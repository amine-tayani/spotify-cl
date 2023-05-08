import Sidenav from "@/components/ui/Sidenav";
import TopNavbar from "@/components/ui/TopNavbar";
import NowPlayingBottomBar from "@/components/NowPlayingBottomBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 `}>
        <Sidenav />
        <TopNavbar />
        <NowPlayingBottomBar />
        {children}
      </body>
    </html>
  );
}
