import { useParams, useNavigate } from "react-router-dom";
import blogs from "./BlogData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function BlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === id);
  if (!post) {
    return (
      <div className="blog-container">
        <p>Post not found.</p>
        <button className="back-btn" onClick={() => navigate("/blog")}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blogpage-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="blogpage-title">{post.title}</h1>
        <p className="date">{post.date}</p> {}
        <div className="blogpage-content">
          {post.content
            .split("\n")
            .map((para, i) => (para.trim() ? <p key={i}>{para}</p> : null))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
