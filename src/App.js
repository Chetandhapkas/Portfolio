import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/project.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
