import React from "react";
import styled from "styled-components";
import { MainContext } from "../../Context";

// Components
import Nav from "../layout/Nav";
import ProfilePicture from "../individual/Profile";
import { FiPlus } from "react-icons/fi";

// Styled Components

import { Container } from "../styles/app";
import MobileNav from "../layout/MobileNav";
import Right from "../layout/Right";

const Titlebar = styled.div`
  width: 100%;
  background: ${props => props.bg || "white"};
  color: ${props => props.color || "black"};
  padding: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  z-index: 4;
`;

export const Subcontainer = styled.div`
  display: flex;
  position: relative;
  max-width: 950px;
  width: 100%;
  color: ${props => props.color || "black"};

  @media (max-width: 1180px) {
    max-width: 100%;
  }

  .mainContainer {
    width: 100%;
    max-width: 600px;
    padding: 0;

    @media (max-width: 1180px) {
      max-width: 100%;
    }

    .dataContainer {
      &[placeholder]:empty:before {
        content: attr(placeholder);
        color: #bababa;
      }
    }

    .profileContainer {
      display: flex;
      flex-direction: column;
      margin: 1rem 12px;

      .baseInfo {
        display: flex;

        @media (max-width: 720px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .infoContainer {
          @media (max-width: 720px) {
            margin-top: 1rem;
          }

          .unameContainer {
            font-weight: 500;
            @media (max-width: 720px) {
              text-align: center;
            }

            h2 {
              &[placeholder]:empty:before {
                content: attr(placeholder);
                color: #bababa;
              }
            }
          }

          .followData {
            margin: 1rem 0;
            display: flex;
            div {
              margin-right: 12px;
              display: flex;
              span {
                display: block;
                margin-right: 8px;
              }
            }
          }
        }

        .pictureContainer {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 3rem;

          &:hover {
            .changeProfilePic {
              opacity: 1;
            }
          }

          .changeProfilePic {
            transition: 0.2s all;
            cursor: pointer;
            border-radius: 50%;
            background: ${props => props.bgProf || "#2b2b2b8a"};
            width: 100%;
            height: 100%;
            z-index: 2;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            opacity: 0;
            top: 0;

            button {
              transition: 0.2s all;
              background: #1d7bce;
              padding: 1rem;
              cursor: pointer;
              width: 100%;
              border: none;
              font-size: 1.5rem;
              color: white;

              &:hover {
                color: #ebebeb;
              }

              &:focus {
                outline: none;
              }
            }
          }
        }
      }
    }
  }
`;

const Profile = () => {
  const myContext = React.useContext(MainContext);

  const bioRef = React.useRef(null);
  const usernameRef = React.useRef(null);

  const onChangeContentEditable = () => {
    let bio = bioRef.current;
    let username = usernameRef.current;
    bio.addEventListener("input", e => {
      myContext.methods.profileData(e);
    });
    username.addEventListener("input", e => {
      myContext.methods.profileData(e);
    });
  };

  React.useEffect(() => {
    myContext.methods.setNav(2);
    onChangeContentEditable();
  }, []);

  return (
    <Container className="container">
      <Nav />
      <Subcontainer>
        <div className="mainContainer">
          <Titlebar>Profile</Titlebar>
          <div className="profileContainer">
            <div className="baseInfo">
              <div>
                <div className="pictureContainer">
                  <ProfilePicture h="150px" w="150px" />
                  <div className="changeProfilePic">
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="infoContainer">
                <h2
                  className="unameContainer"
                  id="username"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  placeholder="Username"
                  ref={usernameRef}
                >
                  {new DOMParser().parseFromString(
                    myContext.profileData.username,
                    "text/html"
                  ).innerHTML || "Hello World"}
                </h2>
                <div className="followData">
                  <div>
                    <span>
                      <strong>23k</strong>
                    </span>
                    Posts
                  </div>
                  <div>
                    <span>
                      <strong>3.4k</strong>
                    </span>
                    Followers
                  </div>
                  <div>
                    <span>
                      <strong>230</strong>
                    </span>
                    Followings
                  </div>
                </div>
                <div className="bioContainer">
                  <strong>Bio</strong>
                  <div
                    className="dataContainer"
                    contentEditable="true"
                    id="bio"
                    ref={bioRef}
                    suppressContentEditableWarning={true}
                    placeholder="Some information..."
                  >
                    {new DOMParser().parseFromString(
                      myContext.profileData.bio,
                      "text/html"
                    ).innerHTML || "No Data"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Right />
      </Subcontainer>
      <MobileNav />
    </Container>
  );
};

export default Profile;
