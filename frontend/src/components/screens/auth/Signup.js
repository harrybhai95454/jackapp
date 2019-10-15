import React from "react";
import { CardForm, Bigbutton, BrownContainer } from "../../styles/app";
import { FiUserPlus, FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Signup = () => {


   const preventing = (e) => {
      e.preventDefault();
   }

  return (
    <>
      <BrownContainer>
        <CardForm onSubmit={preventing}>
          <div>
            <label for="username">
              <FiUserPlus />
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
          <Bigbutton type="submit">Sign Up</Bigbutton>
        </CardForm>
        <span id="sign-text">Already joined <Link to="/login">login</Link></span>
      </BrownContainer>
    </>
  );
};

export default Signup;
