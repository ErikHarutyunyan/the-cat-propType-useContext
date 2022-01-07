import React from "react";
import { LoadMoreWrapper } from "./LoadMore.styled";
// import PropTypes from "prop-types";

const LoadMore = ({ title, handleContent }) => {
  return <LoadMoreWrapper onClick={handleContent}>{title}</LoadMoreWrapper>;
};

// LoadMore.propTypes = {
//   handleContent: PropTypes.func,
//   text: PropTypes.string,
// };

export { LoadMore };
