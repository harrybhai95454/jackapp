import React from "react";
import profileImg from "../../assets/tweet.jpg";
import styled from "styled-components";

const Container = styled.div`
  width: ${props => props.w || '26px'};
  height: ${props => props.h || '26px'};
`;

const Profile = (props) => {
  return (
    <Container w={props.w} h={props.h} className={props.newClass + " profilePic"} >
      <img src={profileImg} alt="my-pic" />
    </Container>
  );
};

export default Profile;
