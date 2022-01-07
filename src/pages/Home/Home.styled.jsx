// StyledComponents
import styled from "styled-components";

const HomeSection = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-blue-purplish-dark);
  & > div {
    h1 {
      font-size: 12vmax;
      padding: 25px;
    }
    h2 {
      font-size: 6vmax;
      padding: 25px;
    }
    h3 {
      font-size: 3vmax;
      padding: 25px;
    }
  }
`;

export { HomeSection };
