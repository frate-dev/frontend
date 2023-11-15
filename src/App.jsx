import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByStars, filterForWord, getAllPackages } from "./store/packages";
import Header from "./components/header/index";
import { Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages.packages);
  useEffect(() => {
    dispatch(getAllPackages());
    // dispatch(filterForWord("7bitconf"))
  }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Routes>
        {/* <Route path="/" />
        <Route path="/packages" />
        <Route path="/packages/:package" /> */}
      </Routes>
    </>
  );
}

export default App;
