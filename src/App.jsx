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
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:package" element={<PackagePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
