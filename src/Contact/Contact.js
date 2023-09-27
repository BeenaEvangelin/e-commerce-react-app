import React from "react";
import Policies from "./Policies/Policies";
import Faqs from "./FAQ'S/Faqs";
import Touch from "./Touch/Touch";
import "./Contact.css";
import { AiOutlineCopyright } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <Policies />
        <Faqs />
        <Touch />
      </div>
      <div className="copyrights">
        <span>
          <AiOutlineCopyright />
          2023, All rights Reserved. Shopsy- created by Beena.
        </span>
      </div>
    </>
  );
};

export default Contact;
