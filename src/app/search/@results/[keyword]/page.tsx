import Image from "next/image";
import Link from "next/link";

export default function SearchResults({
  params,
}: {
  params: { keyword: string };
}) {
  const types = [
    "All",
    "Podcast & Shows",
    "Playlists",
    "Profiles",
    "Artists",
    "Songs",
    "Genres & Moods",
    "Albums",
  ];

  return (
    <main className="relative py-3 min-h-screen">
      <div className="-ml-16">
        <li className="flex items-center justify-center fixed z-50 w-full">
          {types.map((type, id) => (
            <Link
              href={`/search/${encodeURIComponent(params.keyword)}/${type}`}
              key={id}
              className={`inline-flex items-center px-4 py-1.5 mr-2 text-sm ${
                id === 0
                  ? "bg-neutral-200 text-black hover:bg-white"
                  : "text-neutral-50 hover:text-white bg-[--background-elevated-base] hover:bg-[--background-elevated-highlight]"
              }  rounded-full`}
            >
              {type}
            </Link>
          ))}
        </li>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-8 mx-72">
        <div className=" p-8 md:p-12">
          <h1 className=" text-white text-2xl font-extrabold mb-2">
            Top result
          </h1>
          <div className="space-y-3 mt-3 p-6 bg-[--background-black] rounded-lg">
            <Image
              src="https://i.scdn.co/image/ab67616100005174fbe071f5bc42f38d3485a29a"
              alt="Search image"
              width={180}
              height={180}
              className="w-24 h-24 rounded-full"
            />
            <h2 className="text-3xl text-white font-bold">YOASOBI</h2>
            <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-neutral-50 hover:text-white bg-[--background-base] rounded-full">
              Artist
            </span>
          </div>
        </div>
        <div className=" p-8 md:p-12">
          <h2 className=" text-white text-3xl font-extrabold mb-2">
            Start with Flowbite Design System
          </h2>
          <p className="text-lg font-normal text-neutral-300 mb-4">
            Static websites are now used to bootstrap lots of websites and are
          </p>
        </div>
      </div>
    </main>
  );
}
