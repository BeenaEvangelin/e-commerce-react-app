import React from "react";
import "./Touch.css";
import { BsMessenger } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const Touch = () => {
  return (
    <div className="content">
      <h2>Touch</h2>
      <div className="touch_icons">
        <AiFillFacebook className="facebook_icon" />
        <BsTwitter className="twitter_icon" />
        <FaInstagramSquare className="instagram_icon" />
        <BsMessenger className="messenger_icon" />
      </div>
    </div>
  );
};

export default Touch;
