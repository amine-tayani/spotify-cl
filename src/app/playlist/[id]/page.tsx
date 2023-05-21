import PlaylistGrid from "@/components/playlist/PlaylistGrid";
import PlaylistActionBar from "@/components/playlist/PlaylistActionBar";
import PlaylistCover from "@/components/playlist/PlaylistCover";

interface Props {
  id: string;
}

export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-72">
      <PlaylistCover />
      <PlaylistActionBar />
      <PlaylistGrid />
    </main>
  );
}
