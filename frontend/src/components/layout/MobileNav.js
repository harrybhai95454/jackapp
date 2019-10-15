import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome, FiSettings } from "react-icons/fi";
import Profile from "../individual/Profile";
import { Navbutton } from "../styles/app";
import { MainContext } from "../../Context";

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 4;
  display: none;
  justify-content: center;
  bottom: 0;
  left: 0;
  background: ${props => props.bg || "white"};
  border-top: 1px solid #ebebeb;
  color: ${props => props.color || "#5b5b5b"};

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;

    li {
      margin: 2px 4px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

const MobileNav = () => {
  const myContext = React.useContext(MainContext);

  const jsxData = [
    {
      data: (
        <Link to="/">
          <div>
            <FiHome />
          </div>
        </Link>
      )
    },
    {
      data: (
        <Link to="/settings">
          <div>
            <FiSettings />
          </div>
        </Link>
      )
    },
    {
      data: (
        <Link to="/profile">
          <Profile />
        </Link>
      )
    }
  ];

  return (
    <Container>
      <ul className="navbar">
        {jsxData.map((e, i) => {
          if (i === myContext.nav) {
            return (
              <Navbutton className="active" key={i}>
                {e.data}
              </Navbutton>
            );
          } else {
            return <Navbutton key={i}>{e.data}</Navbutton>;
          }
        })}
      </ul>
    </Container>
  );
};

export default MobileNav;
