import { useEffect, useState } from "react";
import mascara_blog from "../../assets/mascara_blog.png";
import { getPosts } from "../lib/api";
import { Posts } from "./Posts";
import logo from "../../assets/logovassarnegro.png";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data.data));
    const body = document.querySelector("body");
    body.classList.add("noScroll");
  }, []);

  return (
    <div className="blog">
      <div className="blog_title">
        <h2>
          Blo
          <span className="libre_font">g</span>
        </h2>
      </div>

      <div className="blog_container">
        <Posts posts={posts} />
      </div>
    </div>
  );
};
