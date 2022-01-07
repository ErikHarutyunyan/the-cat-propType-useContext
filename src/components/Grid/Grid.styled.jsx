// StyledComponents
import styled from "styled-components";

const SectionWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  padding: 40px 5px;
  justify-items: center;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export { SectionWrapper };
