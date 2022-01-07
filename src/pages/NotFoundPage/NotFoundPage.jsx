// StyledComponents
import styled from "styled-components";

const Error = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--color-blue-purplish-dark);
  & > h1 {
    font-size: 23vmax;
  }
  & > h2 {
    font-size: 4vmax;
  }
`;
const BackHome = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 20px;
  padding: 10px 25px;
  border: 2px solid var(--color-blue-purplish-dark);
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  overflow: hidden;

  &:after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    transform: scale(0.1);
  }
  &:hover {
    color: var(--color-white);
  }
  &:hover:after {
    background: #11101d;
    transform: scale(1);
  }
`;

export { Error, BackHome };
