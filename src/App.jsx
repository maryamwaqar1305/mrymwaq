import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  const [ready, setReady] = useState(false);
  useLenis();

  return (
    <>
      <ScrollToTop />
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home ready={ready} />} />
        <Route path="/work" element={<Home ready={ready} />} />
        <Route path="/contact" element={<Home ready={ready} />} />
        <Route path="/designs" element={<Home ready={ready} />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Home ready={ready} />} />
      </Routes>
      <Footer />
    </>
  );
}
