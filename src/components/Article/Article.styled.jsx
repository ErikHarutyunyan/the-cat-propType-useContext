// StyledComponents
import styled from "styled-components";

const ArticleThumb = styled.article`
  width: 100%;
  height: 17.5rem;
  position: relative;
  overflow: hidden;
  padding: 5px;
  border: 2px solid var(--color-blue-purplish-dark);
  background-color: var(--color-gray-light);
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export { ArticleThumb };
