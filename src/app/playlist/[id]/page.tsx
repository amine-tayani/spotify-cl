import Grid from "@/components/playlist/Grid";
import PlaylistActionBar from "@/components/playlist/PlaylistActionBar";
import PlaylistCover from "@/components/playlist/PlaylistCover";

interface Props {
  id: string;
}

export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-72">
      <div>
        <PlaylistCover />
        <PlaylistActionBar />
        <Grid />
      </div>
    </main>
  );
}
