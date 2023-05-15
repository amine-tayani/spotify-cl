import SearchTrack from "@/components/search/SearchTrack";
import TopResult from "@/components/search/TopResult";
import TypeBadges from "@/components/search/TypeBadges";
import Link from "next/link";

export default function SearchResults({
  params,
}: {
  params: { keyword: string };
}) {
  return (
    <main className="relative min-h-screen">
      <TypeBadges keyword={params.keyword} />

      <div className="grid grid-flow-row lg:grid-flow-col items-center grid-cols-3 lg:grid-cols-6 mx-72 gap-x-6 gap-y-2">
        <TopResult />
        <section className=" p-8 md:p-12 lg:col-span-3">
          <h1 className=" text-white text-2xl font-bold my-4">Songs</h1>
          <ul>
            {Array.from({ length: 4 }).map((_, id) => (
              <SearchTrack key={id} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
