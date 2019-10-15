import React from "react";
import { MainContext } from '../../Context';

// Components
import Nav from "../layout/Nav";
import Right from "../layout/Right";
import Main from "../layout/Main";

// Styled Components

import { Container, Subcontainer } from "../styles/app";
import MobileNav from "../layout/MobileNav";

const Home = () => {

  const myContext = React.useContext(MainContext);

  React.useEffect(() => {
    myContext.methods.setNav(0);
  }, [])

  return (
    <Container className="container">
      <Nav />
      <Subcontainer>
        <Main />
        <Right />
      </Subcontainer>
      <MobileNav />
    </Container>
  );
};

export default Home;
