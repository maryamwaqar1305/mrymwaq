import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import useLenis from "./hooks/useLenis";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogNav from "./components/BlogNav";
import Backdrop from "./components/Backdrop";

import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Quotes from "./pages/Quotes";
import Letters from "./pages/Letters";

export default function App() {
  const [ready] = useState(true);
  const location = useLocation();

  useLenis();

  /*
   * /blog
   *     = part of the normal portfolio
   *
   * /blog/quotes
   * /blog/:slug
   *     = standalone blog website
   */

  const isStandaloneBlog =
    location.pathname === "/blog/quotes" ||
    (
      location.pathname.startsWith("/blog/") &&
      location.pathname !== "/blog"
    );

  return (
    <>
      <Backdrop />
      <ScrollToTop />

      {/* NORMAL PORTFOLIO NAVBAR */}
      {!isStandaloneBlog && (
        <>
          <Cursor />
          <Nav />
        </>
      )}

      {/* STANDALONE BLOG NAVBAR */}
      {isStandaloneBlog && <BlogNav />}

      {/* Keyed by pathname so each page plays its enter animation on arrival */}
      <div className="page-enter" key={location.pathname}>
        <Routes>

        {/* =========================
            PORTFOLIO
        ========================= */}

        <Route path="/" element={<Home ready={ready} />} />

        <Route path="/work" element={<Home ready={ready} />} />

        <Route path="/contact" element={<Home ready={ready} />} />

        <Route path="/designs" element={<Home ready={ready} />} />

        <Route path="/work/:slug" element={<CaseStudy />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        


        {/* =========================
            BLOG
        ========================= */}

        {/* Blog index — part of portfolio */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/quotes" element={<Quotes />} />

        <Route path="/blog/letters" element={<Letters />} />

        <Route path="/blog/:slug" element={<BlogPost />} />


        {/* =========================
            FALLBACK
        ========================= */}

        <Route
          path="*"
          element={<Home ready={ready} />}
        />

        </Routes>
      </div>

      {/* Portfolio footer only */}
      {!isStandaloneBlog && <Footer />}
    </>
  );
}