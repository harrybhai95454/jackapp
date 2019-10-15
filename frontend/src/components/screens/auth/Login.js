import React from "react";
import { CardForm, Bigbutton, BrownContainer } from "../../styles/app";
import { FiUser, FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = () => {


   const preventing = (e) => {
      e.preventDefault();
   }

  return (
    <>
      <BrownContainer>
        <CardForm onSubmit={preventing}>
          <div>
            <label for="username">
              <FiUser />
              <input
                type="text"
                name="username"
                id="username"
                aria-label="username"
                aria-required="true"
                placeholder="Username"
              />
            </label>
            <br />
            <label for="password">
              <FiKey />
              <input
                type="password"
                name="password"
                id="password"
                aria-label="password"
                aria-required="true"
                placeholder="Password"
              />
            </label>
          </div>
          <Bigbutton type="submit">Login</Bigbutton>
        </CardForm>
        <span id="sign-text">Just heard out plz <Link to="/signup">Sign Up</Link></span>
      </BrownContainer>
    </>
  );
};

export default Login;
