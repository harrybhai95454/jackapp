import React from "react";
import New from "../post/New";
import Appbar from "../individual/Appbar";
import Post from "../post/Post";

const Main = () => {
  return (
    <div className="main-container">
      <Appbar />
      <div id="newTweet"></div>
      <New />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Main;
