import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
