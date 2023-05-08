import GetStartedSection from "@/components/GetStartedSection";
import MainContent from "@/components/MainContent";
import RecentlyPlayedSection from "@/components/RecentlyPlayedSection";

export default function Home() {
  return (
    <main className="grid">
      <MainContent />
      <RecentlyPlayedSection />
      <GetStartedSection />
    </main>
  );
}
