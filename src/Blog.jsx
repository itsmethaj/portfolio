import blogs from "./BlogData";
import "./index.css";

const bgImages = ["./card 1.svg", "./card 2.svg", "./card 3.svg"];
const shuffled = [...bgImages].sort(() => Math.random() - 0.5);

function BlogCard({ title, date, bgImage, id }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      onClick={() => (window.location.href = `/blog/${id}`)}
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
