import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPackages, filterForWord } from "../../store/packages";
import { useSearchParams, useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE_DEFAULT = 50;
const SORT_OPTIONS = {
  POPULARITY: "popularity",
  ALPHABETICAL: "alphabetical",
};

export default function PackagesPage() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const displayedItems = useSelector(
    (state) => state.packages.displayPackages || []
  );
  const [sortOrder, setSortOrder] = useState(SORT_OPTIONS.POPULARITY);

  const query = searchParams.get("query");
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = parseInt(
    searchParams.get("size") || ITEMS_PER_PAGE_DEFAULT.toString(),
    10
  );

  useEffect(() => {
    if (query) {
      dispatch(getAllPackages());
      const from = (currentPage - 1) * itemsPerPage;
      dispatch(filterForWord(query, from, itemsPerPage));
    }
  }, [dispatch, query, currentPage, itemsPerPage]);

  const capitalizeWords = useCallback(
    (str) => str.replace(/\b\w/g, (char) => char.toUpperCase()),
    []
  );

  const totalItems = displayedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;

  const sortedItems = useMemo(() => {
    let sorted = [...displayedItems];
    if (sortOrder === SORT_OPTIONS.POPULARITY) {
      sorted.sort((a, b) => b.stars - a.stars);
    } else if (sortOrder === SORT_OPTIONS.ALPHABETICAL) {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [displayedItems, sortOrder]);

  const currentItems = useMemo(() => {
    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    return sortedItems.slice(firstItemIndex, firstItemIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, sortedItems]);

  const updatePageParam = useCallback(
    (newPage) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());
      if (itemsPerPage !== ITEMS_PER_PAGE_DEFAULT) {
        newSearchParams.set("size", itemsPerPage.toString());
      }
      setSearchParams(newSearchParams);
    },
    [searchParams, itemsPerPage, setSearchParams]
  );

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      updatePageParam(currentPage + 1);
    }
  }, [currentPage, totalPages, updatePageParam]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      updatePageParam(currentPage - 1);
    }
  }, [currentPage, updatePageParam]);

  const renderSortDropdown = () => (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border p-2 rounded"
    >
      <option value={SORT_OPTIONS.POPULARITY}>Sort by Popularity</option>
      <option value={SORT_OPTIONS.ALPHABETICAL}>Sort Alphabetically</option>
    </select>
  );

  const renderCards = useMemo(
    () =>
      currentItems.map((packageItem, index) => (
        <div
          key={packageItem.id || index}
          className="bg-white border border-[#C8C8C8] p-4 mb-4 rounded flex justify-between items-center w-full hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault;
            nav(`/packages/${packageItem.name}`);
          }}
        >
          <div className="w-1/2">
            <h5 className="text-2xl font-bold mb-2 underline">
              {capitalizeWords(packageItem.name)}
            </h5>
            <p>{packageItem.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">{packageItem.version}</span>
          </div>
        </div>
      )),
    [currentItems, capitalizeWords]
  );

  return (
    <div className="w-1/2 h-full mx-auto my-20">
      <>
        <div className="flex justify-start mb-10">{renderSortDropdown()}</div>
        <div className="mb-4">
          Showing results {firstItemIndex + 1}-
          {Math.min(lastItemIndex, totalItems)} of {totalItems} packages for{" "}
          {query}.
        </div>
        <div className="flex flex-col items-center">{renderCards}</div>
        {totalItems > itemsPerPage && (
          <div className="flex justify-between items-center my-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </>
    </div>
  );
}
