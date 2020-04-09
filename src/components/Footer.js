import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () =>
  <footer className="d-flex fixed-bottom align-items-center px-1 px-md-3 bg-dark" style={{opacity:".8"}}>
    {FooterContent.map(link =>
      <a className="m-1 m-lg-2" key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
        {link.img}
      </a>
    )}
    <span className="ml-auto text-right">&copy; Copyright 2020 React Finder, ReactJS App. MIT license.</span>
  </footer>


export default Footer

const FooterContent = [
  { id: 0, url: "https://github.com/AndreiZernov", img: <FaGithub size="1.3em" color="white"/> },
  { id: 1, url: "https://www.linkedin.com/in/andrei-zernov/", img: <FaLinkedinIn size="1.3em" color="white"/> },
  { id: 3, url: "https://twitter.com/AndrewZer", img: <FaTwitter size="1.3em" color="white"/> }
]
