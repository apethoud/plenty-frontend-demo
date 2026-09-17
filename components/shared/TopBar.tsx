import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SearchBar from "@/components/shared/SearchBar";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-brand-100 bg-white px-8 py-4 sm:px-16">
      <Breadcrumbs />
      <SearchBar />
    </header>
  );
}
