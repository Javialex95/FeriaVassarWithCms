import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import marcosemidiamante from "../../assets/marcosemidiamante.png";
import { Parragraf } from "../Common/Parragraf";

export const Posts = ({ posts }) => {
  const [updatedPosts, setUpdatedPosts] = useState([]);

  useEffect(() => {
    const newPosts = posts.map((post) => {
      const informacion = post.informacion;
      var maxLength = 200;

      //trim the string to the maximum length
      var trimmedString = informacion.substr(0, maxLength);

      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      );

      return {
        ...post,
        infoCut: trimmedString + "...**",
      };
    });

    setUpdatedPosts(newPosts);
  }, [posts]);

  if (updatedPosts.length <= 0) return "...cargando";

  return (
    <div className="posts">
      {updatedPosts.map((post) => (
        <div className="posts_post">
          <div className="post_img">
            <img
              className="marco"
              src={marcosemidiamante}
              alt="marcosemidiamante"
            />
            <img
              className="img"
              src={post.imagen.formats.small.url}
              alt="imagen"
            />
          </div>
          <div className="post_info">
            <Parragraf text={post.infoCut} />

            <div className="post_button">
              <Link to={`/blog/post/${post._id}`}><span className="libre_font">Ver</span> <strong>más</strong></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
