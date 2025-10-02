interface Props {
  id: string;
}

export const runtime = 'edge';


export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-72">
      <h1>Track page</h1>
      {params.id}
    </main>
  );
}
