import blogs from "./BlogData";
import "./index.css";
import { useNavigate } from "react-router-dom";

const bgImages = ["/card 1.svg", "/card 2.svg", "/card 3.svg"]; // changed to absolute paths
const shuffled = [...bgImages].sort(() => Math.random() - 0.5);

function BlogCard({ title, date, id, bgImage }) {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  console.log("Card background:", bgImage); // debug log

  return (
    <div
      className="card"
      onClick={() => navigate(`/blog/${id}`)}
      style={cardStyle}
    >
      <h2>
        <span className="title-card">{title}</span>
        <br />
        <span className="date">{date}</span>
      </h2>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog-container" id="blog">
      <h1>Blog</h1>
      <div className="card-container">
        {blogs.map((item, index) => (
          <BlogCard
            key={item.id}
            title={item.title}
            date={item.date}
            bgImage={shuffled[index % shuffled.length]}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
