import React, { useEffect, useState } from "react";
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
        <h2>Blog</h2>
      </div>

      <div className="blog_container">
        <div className="blog_leftImg">
          <img src={mascara_blog} alt="mascara_blog" />
        </div>
        <Posts posts={posts} />

        <div className="blog_logoVassar">
          <img className="logo" src={logo} alt="logo_feria_newsletter" />
        </div>
      </div>
    </div>
  );
};
