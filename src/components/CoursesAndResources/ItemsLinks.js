import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ItemsLinks = ({ path, url, list }) => (
  <div className="d-flex justify-content-center my-2 flex-wrap">
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Tooltip id="tooltip-top">
          {`Page with All ${path === "/courses" ? "courses" : "materials"}`}
        </Tooltip>
      }
    >
      <Link className="m-3" to={`${url}`}>
        <img
          style={{ height: "35px" }}
          src={require("../../images/all.png")}
          alt="all"
        ></img>
      </Link>
    </OverlayTrigger>

    {list.map((name) => (
      <OverlayTrigger
        key={name}
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            {`Page with
              ${name.replace("_", " ").replace(name[0], name[0].toUpperCase())}
              ${path === "/courses" ? "courses" : "materials"}`}
          </Tooltip>
        }
      >
        <Link
          className={path === "/courses" ? "m-2 m-xl-3" : "m-2 m-xl-4"}
          to={`${url}/${name}`}
        >
          <img
            style={{ height: "35px" }}
            src={require(`../../images/${name}.${
              path === "/courses" ? "png" : "svg"
            }`)}
            alt={name}
          ></img>
        </Link>
      </OverlayTrigger>
    ))}
  </div>
);

export default ItemsLinks;
