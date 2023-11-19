import SearchBar from "../searchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white h-32 px-4">
      <img
        src="https://raw.githubusercontent.com/frate-dev/frate/9fa2994fd9c99f3f14a5f072c860d08792313e02/source/images/fratelogo.svg"
        alt="logo"
        className="w-20"
      ></img>
      <div className="flex-grow px-4 max-w-xl mx-auto">
        <SearchBar />
      </div>
    </header>
  );
}
