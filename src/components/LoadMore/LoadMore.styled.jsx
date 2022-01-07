// StyledComponents
import styled from "styled-components";

const LoadMoreWrapper = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid var(--color-blue-purplish-dark);
  color: var(--color-blue-purplish-dark);
  font-weight: 600;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  text-transform: capitalize;
  &:hover {
    box-shadow: 5px 9px 20px 0px #11101db3, -4px -4px 5px 0px #11101d99,
      7px 7px 20px 0px #11101d1f, 4px 4px 5px 0px #11101d14;
  }
`;

export { LoadMoreWrapper };
