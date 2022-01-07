// StyledComponents
import styled from "styled-components";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid var(--color-blue-purplish-dark);
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export { LoadingWrapper, Spinner };
