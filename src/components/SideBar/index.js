import React, { useState } from "react";

// import Router
import { Link, NavLink } from "react-router-dom";
// import styled
import { Aside, LinkWrapper, Arrow, TitleWrapper } from "./SideBar.styled";
// import Global Context
import { useGlobalContext } from "../../context";

const SideBar = () => {
  const [sidebarMove, setSidebarMove] = useState(false);

  const { categoryData, handleCategory, dataReset } = useGlobalContext();

  const clickMove = (e) => {
    setSidebarMove(!sidebarMove);
  };

  return (
    <Aside className={sidebarMove ? `sidebar open` : `sidebar close`}>
      <TitleWrapper>
        <Link
          to={`/`}
          onClick={() => {
            dataReset();
            clickMove();
          }}
        >
          <p>CATS IMG</p>
        </Link>
        <p>Category</p>
      </TitleWrapper>
      <LinkWrapper>
        {categoryData &&
          categoryData.map((category, index) => {
            const { id, name } = category;
            return (
              <NavLink
                key={index}
                to={`category/${name}/${id}`}
                onClick={() => {
                  handleCategory(id);
                  clickMove();
                }}
              >
                {name}
              </NavLink>
            );
          })}
      </LinkWrapper>
      <Arrow onClick={() => clickMove()}>
        <p>
          <i className={sidebarMove ? `arrow left` : `arrow right`}></i>
        </p>
      </Arrow>
    </Aside>
  );
};

export { SideBar };
