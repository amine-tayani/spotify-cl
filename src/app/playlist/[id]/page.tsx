import PlaylistActionBar from "@/components/playlist/PlaylistActionBar";
import PlaylistCover from "@/components/playlist/PlaylistCover";
import PlaylistGrid from "@/components/playlist/PlaylistGrid";

interface Props {
  id: string;
}

export const runtime = 'edge';

export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-72">
      <PlaylistCover />
      <PlaylistActionBar />
      <PlaylistGrid />
    </main>
  );
}
