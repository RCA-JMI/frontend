import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Results from "./pages/result/Results"
// import Results from "./pages/Results2";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
