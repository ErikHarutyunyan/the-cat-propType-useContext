import React from "react";
import { ArticleThumb } from "./Article.styled";
import PropTypes from "prop-types";

const ArticleImg = ({ id, url }) => {
  return (
    <ArticleThumb>
      <img src={url} alt={`cat-img-${id}`} />
    </ArticleThumb>
  );
};

// ArticleImg.propTypes = {
//   id: PropTypes.string,
//   url: PropTypes.string,

// }
export { ArticleImg };
