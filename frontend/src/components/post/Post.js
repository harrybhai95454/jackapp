import React from "react";
import styled from "styled-components";
import { ProfilePart, SmallBtn } from "../styles/app";
import Profile from "../individual/Profile";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Container = styled.div`
  transition: 0.4s all;
  width: 100%;
  padding: 1rem;
  position: relative;
  display: flex;
  border-bottom: 1px solid #ebebeb;

  div {
    position: relative;
  }

  &:hover {
    background: #bac8ce1b;
  }

  .tweet-prof {
    margin-right: 10px;
  }

  .content {
    flex: 1;
  }
`;

const Post = () => {

  return (
    <Container>
      <Profile w="45px" h="45px" newClass="tweet-prof" />
      <div className="content">
        <ProfilePart>
          <div className="part-one">
            <div className="tweet-username">
              <Link to="/profile/1">Hello World</Link> - 10 Oct
            </div>
          </div>
          <div>
            <SmallBtn color="#2393f5" mgt="0">
              Follow
            </SmallBtn>
          </div>
        </ProfilePart>
        <div className="contentPart">
          Also it is such a great activity to stay fit and at the same time
          keeping our public places clean.
        </div>
        <SmallBtn colorHv="#ff3995" bgHv="ff39952a" className="m2">
          <FiHeart />
        </SmallBtn>
      </div>
    </Container>
  );
};

export default Post;
