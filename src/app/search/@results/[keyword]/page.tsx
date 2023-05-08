export default function SearchResults({
  params,
}: {
  params: { keyword: string };
}) {
  return (
    <main>
      <div className="text-white flex justify-center items-center ">
        search results for {params.keyword}
      </div>
    </main>
  );
}
