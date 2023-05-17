export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-neutral-100 rounded-full"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-neutral-100 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-neutral-100 rounded"></div>
            <div className="h-4 bg-neutral-100 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
