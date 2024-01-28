import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar";

export default function Header() {
  const nav = useNavigate();
  return (
    <header className="flex items-center justify-between bg-white h-32 px-4">
      <img
        src="https://raw.githubusercontent.com/frate-dev/frate/9fa2994fd9c99f3f14a5f072c860d08792313e02/source/images/fratelogo.svg"
        alt="logo"
        className="w-20 hover:animate-pulse hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          nav("/");
        }}
      ></img>
      <div className="flex-grow px-4 max-w-xl mx-auto">
        <SearchBar />
      </div>
    </header>
  );
}
