import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByStars, filterForWord, getAllPackages } from "./store/packages";
import Header from "./components/header/index";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import PackagePage from "./pages/package";
import PackagesPage from "./pages/packages";
import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const packages = useSelector((state) => state.packages.packages);
  // useEffect(() => {
  //   dispatch(getAllPackages());
  //   // dispatch(filterForWord("7bitconf"))
  // }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/packages" element={<PackagesPage></PackagesPage>}/>
        <Route path="/packages/:package"element={<PackagePage></PackagePage>}/>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
