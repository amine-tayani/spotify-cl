import BrowseAllCategories from "@/components/search/BrowseAllCategories";
import RecentSearches from "@/components/search/RecentSearches";

export default function Content() {
  return (
    <main>
      <div className="">
        <RecentSearches />
        <BrowseAllCategories />
      </div>
    </main>
  );
}
