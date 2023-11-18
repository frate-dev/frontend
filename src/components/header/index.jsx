import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar";

export default function Header() {
  const navigate = useNavigate();
  const handleHome = (e) => {
    // e.preventdefault();
    navigate("/");
  };
  return (
    <div className="flex justify-between pl-4 bg-[#f7f7f7] h-32">
      <div className="flex">
        <img
          onClick={handleHome}
          className="w-24 hover:animate-pulse hover:cursor-pointer"
          src="https://raw.githubusercontent.com/cmaker-dev/cmaker/6c64104821ca7f9e17583ecf30c7d2ac225a9b58/source/images/cmakerlogo.svg"
          alt="cmakeLogo"
        />
        
      </div>
      <SearchBar ></SearchBar>
      <button className="mr-20 bg-blue h-10 w-40 mt-12 rounded-md hover:bg-green hidden md:flex justify-center items-center">
        {" "}
        Submit Package
      </button>
    </div>
  );
}
