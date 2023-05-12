import Sidenav from "@/components/partials/Sidenav";
import TopNavbar from "@/components/partials/TopNavbar";
import NowPlayingBottomBar from "@/components/music-player/NowPlayingBottomBar";
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
      <body className={`${inter.className} bg-black mr-2`}>
        <Sidenav />
        <div id="main">
          <TopNavbar />
          <div
            style={{
              backgroundColor: "var(--background-base)",
              backgroundImage: "var(--background-gradient)",
            }}
          >
            {children}
          </div>
          <NowPlayingBottomBar />
        </div>
      </body>
    </html>
  );
}
