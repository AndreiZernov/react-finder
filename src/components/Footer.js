import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Recommend from "./Recommend";

const Footer = () => (
  <footer
    className="d-flex fixed-bottom justify-content-between align-items-center px-md-3 p-1 bg-dark"
    style={{ opacity: ".8" }}
  >
    <div>
      {FooterContent.map(link => (
        <a
          className="m-1 m-lg-2"
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.img}
        </a>
      ))}
    </div>
    <Recommend />
  </footer>
);

export default Footer;

const FooterContent = [
  {
    id: 0,
    url: "https://github.com/AndreiZernov",
    img: <FaGithub size="1.3em" color="white" alt="iconsSocialMedia" />
  },
  {
    id: 1,
    url: "https://www.linkedin.com/in/andrei-zernov/",
    img: <FaLinkedinIn size="1.3em" color="white" alt="iconsSocialMedia" />
  },
  {
    id: 3,
    url: "https://twitter.com/AndrewZer",
    img: <FaTwitter size="1.3em" color="white" alt="iconsSocialMedia" />
  }
];
