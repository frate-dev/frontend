import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { filterForWord } from "../../store/packages";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const from = searchParams.get("from") || "0";
  const size = searchParams.get("size") || "50";

  useEffect(() => {
    const queryFromUrl = searchParams.get("query");
    setInputValue(queryFromUrl || "");
    dispatch(filterForWord(queryFromUrl || "", from, size));
    if (window.location.pathname === "/") {
      navigate("/packages");
    }
  }, [searchParams, dispatch, from, size]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const newSearchParams = new URLSearchParams();
      if (e.target.value) newSearchParams.set("query", e.target.value);
      newSearchParams.set("from", from);
      newSearchParams.set("size", size);
      setSearchParams(newSearchParams);
      dispatch(filterForWord(e.target.value, from, size));
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    const newSearchParams = new URLSearchParams();
    if (inputValue) newSearchParams.set("query", inputValue);
    newSearchParams.set("from", from);
    newSearchParams.set("size", size);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/" && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <div className="flex items-center border-1 border-[#A3A3A3] bg-white rounded-lg">
        <input
          ref={inputRef}
          type="text"
          placeholder="Use '/' to focus"
          value={inputValue}
          onChange={handleChange}
          className="w-full py-2 px-4 bg-white text-gray-500 placeholder-[#737373] border border-[#A3A3A3] rounded-lg focus:outline-none focus:border-gray-400"
        />
      </div>
    </form>
  );
}
