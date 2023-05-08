export default function SearchResults({
  params,
}: {
  params: { keyword: string };
}) {
  return (
    <main>
      <div className="text-white flex justify-center items-center ">
        <span className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded">
          {params.keyword}
          <h1>hello</h1>
        </span>
      </div>
    </main>
  );
}
