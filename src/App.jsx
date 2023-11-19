import Header from "./components/header/index";
import { Route, Routes } from "react-router-dom";
import PackagesPage from "./pages/packages";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
