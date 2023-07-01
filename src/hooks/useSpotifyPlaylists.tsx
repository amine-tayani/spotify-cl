import supabase from "@/lib/auth";
import { useEffect, useState } from "react";

const useSpotifyPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState<
    string | undefined | null
  >("");

  const fetchSpotifyPlaylists = async () => {
    const session = await supabase.auth.getUser();
    if (session) {
      console.log("session", session);
    }

    if (spotifyAccessToken) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        );

        const playlistsData = await response.json();
        setPlaylists(playlistsData.items);
      } catch (error) {
        console.error("Error fetching Spotify playlists:", error);
      }
    }
  };

  useEffect(() => {
    fetchSpotifyPlaylists();
  }, []);

  return playlists;
};

export default useSpotifyPlaylists;
