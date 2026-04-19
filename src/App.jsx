import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hero from "./Hero.jsx";
import Aboutme from "./Aboutme.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import BlogPage from "./BlogPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Projects />
      <Contact />
      <Blog />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
