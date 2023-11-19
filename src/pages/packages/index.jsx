import { useDispatch, useSelector } from "react-redux";
import { filterForWord, getAllPackages } from "../../store/packages";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const displayedItems = useSelector((state) => state.packages.displayPackages);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = parseInt(searchParams.get("size") || "50", 10);

  useEffect(() => {
    dispatch(getAllPackages());
    const query = searchParams.get("query");
    const from = (currentPage - 1) * itemsPerPage;
    if (query) {
      dispatch(filterForWord(query, from, itemsPerPage));
    }
  }, [dispatch, searchParams, currentPage, itemsPerPage]);

  const totalItems = displayedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const currentItems = displayedItems.slice(firstItemIndex, lastItemIndex);

  const updatePageParam = (newPage) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", newPage.toString());
    if (itemsPerPage !== 50) {
      newSearchParams.set("size", itemsPerPage.toString());
    }
    setSearchParams(newSearchParams);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      updatePageParam(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      updatePageParam(currentPage - 1);
    }
  };

  const renderCards = () =>
    currentItems.map((packageItem, index) => (
      <div
        key={index}
        className="bg-white border border-[#C8C8C8] p-4 mb-4 rounded flex justify-between items-center w-full"
      >
        <div className="w-1/2">
          <h5 className="text-2xl font-bold mb-2 underline">
            {packageItem.name}
          </h5>
          <p>{packageItem.description}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold">{packageItem.version}</span>
        </div>
      </div>
    ));

  return (
    <div className="w-1/2 h-full mx-auto my-20">
      <div className="mb-4">
        Showing results {firstItemIndex + 1}-
        {Math.min(lastItemIndex, totalItems)} of {totalItems} packages.
      </div>
      <div className="flex flex-col items-center">{renderCards()}</div>
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
    </div>
  );
}
