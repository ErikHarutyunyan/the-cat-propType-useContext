import React from "react";
import { HeaderWrapper } from "./Header.styled";

const Header = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export { Header };
