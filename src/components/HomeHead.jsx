import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "../router";

import styled from "styled-components";
const NavBox = styled.nav`
  a {
    margin-right: 10px;
    color: #000;
    &.active {
      color: #ff0000;
    }
  }
`;

const HomeHeader = (props) => {
  // console.log(props);
  return (
    <NavBox>
      <NavLink to="/a">A</NavLink>
      <NavLink to="/b">B</NavLink>
      <NavLink to="/c">C</NavLink>
    </NavBox>
  );
};

export default withRouter(HomeHeader);
