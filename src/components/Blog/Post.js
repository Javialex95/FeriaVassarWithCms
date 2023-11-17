import React, { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import { getPost } from "../lib/api";
import mascara_blog from "../../assets/mascara_blog.png";
import logo from "../../assets/logovassarnegro.png";
import { Link } from "react-scroll";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});


  useEffect(() => {
    getPost(id).then((data) => setPost(data.data));
    const body = document.querySelector("body");

    if (window.innerWidth > 700) {
      body.classList.add("noScroll");
    }else{
      body.classList.remove("noScroll");
    }
  }, [id]);

  return (
    <div className="post">
      {Object.keys(post).length !== 0 ? (
        <>
          <div className="post_title">
            <h2> {post.titulo}</h2>
          </div>

          <div className="post_container">
            <div className="post_leftImg">
              <img src={mascara_blog} alt="mascara_blog" />
            </div>

            <div className="post_info">
              <div className="imagen">
                <img src={post.imagen.formats.small.url} alt="imagen" />
              </div>
              <div className="text_container">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="text-justify prose"
                >
                  {post.informacion}
                </ReactMarkdown>
              </div>

              {window.innerWidth < 700 && (
                <Link className="boton" to="post" spy={true} smooth={true} duration={500}>
                  Volver arriba
                </Link>
              )}
            </div>

            <div className="post_logoVassar">
              <img className="logo" src={logo} alt="logo_feria_newsletter" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="post_title">
        
          </div>

          <div className="post_container">
            <div className="post_leftImg">
              <img src={mascara_blog} alt="mascara_blog" />
            </div>

            <div className="post_info">
              <div className="imagen"></div>
              <p>CARGANDO INFORMACIÓN</p>
            </div>

            <div className="post_logoVassar">
              <img className="logo" src={logo} alt="logo_feria_newsletter" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
