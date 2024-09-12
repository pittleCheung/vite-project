import React from "react";
import { Link, Outlet } from "react-router-dom"

import styled from "styled-components";
const DemoBox = styled.div`
    display: flex;
    .menu {
        a {
            display: block;
            color: #000;
            font-size: 12px;
        }
    }
`
const A = () => {
    return <DemoBox className="box">
        <div className="menu">
            <Link to="/a/a1">A111</Link>
            <Link to="/a/a2">A222</Link>
            <Link to="/a/a3">A333</Link>
        </div>
        <div className="view">
            <Outlet></Outlet>
        </div>
    </DemoBox>
}

export default A
