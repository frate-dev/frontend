import { useDispatch, useSelector } from "react-redux";
import { filterForWord, getAllPackages } from "../../store/packages";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PackagesPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [hasSearched, setHasSearched] = useState(false);

  const displayedItemsOne = useSelector(
    (state) => state.packages.displayPackages
  );

  useEffect(() => {
    dispatch(getAllPackages());
    const query = searchParams.get("query");
    if (query) {
      dispatch(filterForWord(query));
      setHasSearched(true);
    }
  }, [dispatch, searchParams]);

  const renderCards = () =>
    displayedItemsOne.slice(0, 50).map((packageItem, index) => (
      <div
        key={index}
        className="bg-white border border-gray-300 p-4 mb-4 rounded flex justify-between items-center w-full"
      >
        <div className="w-1/2">
          <h5 className="text-2xl font-bold mb-2 underline">
            {packageItem.name}
          </h5>
          <p>{packageItem.description}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold">{packageItem.version}</span>
          <div className="bg-[#EDEDED] border border-[#434343] p-2 rounded mt-2 text-sm text-[#434343] px-5">
            cmaker add dep {packageItem.name} -l -e
          </div>
        </div>
      </div>
    ));

  return (
    <div className="w-1/2 h-full mx-auto my-20">
      {hasSearched ? (
        displayedItemsOne.length ? (
          <div className="flex flex-col items-center">{renderCards()}</div>
        ) : (
          <div className="mx-auto pt-24 pb-40 flex flex-col items-center justify-center">
            <h3 className="text-gray-700 mx-auto w-fit mb-10 text-lg">
              No Packages Found...
            </h3>
            <h3 className="text-gray-700 mx-auto w-fit mb-6 text-lg">
              Sad Panda...
            </h3>
            <img
              className="mx-auto rounded"
              src="https://media1.giphy.com/media/7p3e2WCM0VEnm/giphy.gif?cid=ecf05e47li5v9zdago8wibx14hdy8jl7ixqeoa01hv1m5zx8&rid=giphy.gif&ct=g"
              alt="sad panda"
            />
          </div>
        )
      ) : null}
    </div>
  );
}
