import Header from "./components/header/index";
import { Route, Routes } from "react-router-dom";
import PackagesPage from "./pages/packages";
import Footer from "./components/footer";
import SpecificPackage from "./pages/specificPackage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:id" element={<SpecificPackage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
