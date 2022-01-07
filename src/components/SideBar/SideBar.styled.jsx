// StyledComponents
import styled from "styled-components";

const Aside = styled.aside`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-blue-purplish-dark);
  z-index: 100;
  transition: all 0.5s ease;
  &.sidebar.open {
    transform: translate(0px, 0px);
  }
  &.sidebar.close {
    transform: translate(-150px, 0px);
  }
`;
const TitleWrapper = styled.div`
  font-size: 3vmax;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  & {
    a {
      padding-top: 20px;
    }
    p {
      color: var(--color-white);
      font-weight: 500;
      font-size: 25px;
      text-transform: uppercase;
      &:last-child {
        padding-bottom: 10px;
        text-transform: capitalize;
      }
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex: 1 1 auto;
  & a {
    max-width: 120px;
    width: 100%;
    max-height: 40px;
    height: 100%;
    padding: 10px 15px;
    border: 2px solid var(--color-white);
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    color: var(--color-white);
    margin: 10px;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.5px;
    &:after {
      position: absolute;
      content: "";
      top: 5px;
      left: 6px;
      width: 90%;
      height: 70%;
      border: 1px solid var(--color-white);
      opacity: 0;
      transition: all 0.5s ease;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
    &.active {
      &:after {
        opacity: 1;
      }
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 3px;
  & > p {
    margin: 0;
    padding: 0;
    border: 1px solid #000000;
    width: 20px;
    height: 20px;
    background-color: var(--color-blue-purplish-dark);
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background-color: var(--color-gray-light);
      border: 1px solid var(--color-blue-purplish-dark);
      & .arrow {
        border: solid var(--color-blue-purplish-dark);
        border-width: 0 2px 2px 0;
      }
    }
    & .arrow {
      border: solid var(--color-white);
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      margin-left: calc(100% - 14px);
      margin-top: calc(100% - 13px);
      transition: all 0.5s ease;
      &.right {
        transform: rotate(-45deg);
      }
      &.left {
        transform: translate(3px, 0px) rotate(135deg);
      }
    }
  }
`;

export { Aside, LinkWrapper, TitleWrapper, Arrow };
