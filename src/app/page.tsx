import GetStartedSection from "@/components/ui/GetStartedSection";
import MainContent from "@/components/ui/MainContent";
import RecentlyPlayedSection from "@/components/ui/RecentlyPlayedSection";

export default function Home() {
  return (
    <main className="grid">
      <MainContent />
      <RecentlyPlayedSection />
      <GetStartedSection />
    </main>
  );
}
