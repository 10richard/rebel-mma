import Navbar from "./components/Header/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Programs from "./pages/Programs";
import Schedule from "./pages/Schedule";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import CtaBanner from "./components/CtaBanner/CtaBanner";

// Get inspiration from other websites such as
// strategicmma,
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <CtaBanner />
      <Footer />
    </>
  );
}

export default App;
