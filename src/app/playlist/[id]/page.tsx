import PlaylistActionBar from "@/components/playlist/PlaylistActionBar";
import PlaylistCover from "@/components/playlist/PlaylistCover";
import PlaylistGrid from "@/components/playlist/PlaylistGrid";

export default function Playlist() {
  return (
    <main className="sm:ml-72">
      <PlaylistCover />
      <PlaylistActionBar />
      <PlaylistGrid />
    </main>
  );
}
