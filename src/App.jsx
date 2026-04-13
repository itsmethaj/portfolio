import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Hero.jsx";
import Aboutme from "./Aboutme.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import BlogPage from "./BlogPage.jsx";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
