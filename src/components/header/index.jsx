import SearchBar from "../searchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white h-32 px-4">
      <div className="flex-grow px-4 max-w-xl mx-auto">
        <SearchBar />
      </div>
    </header>
  );
}
