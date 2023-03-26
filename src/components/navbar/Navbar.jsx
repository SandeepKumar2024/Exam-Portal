import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const user = [];
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <div className="mock">
              <div onClick={() => setOpenn(!openn)}>
                <li>
                  Mock Tests <i class="fa fa-chevron-down"></i>{" "}
                </li>
              </div>
              {openn && (
                <div className="mockType">
                  <ul>
                    <Link className="link" to="/jee"><li>JEE MAIN / ADV</li></Link>
                    <li>NEET</li>
                  </ul>
                </div>
              )}
            </div>
            <li>Courses</li>
            <li>About</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <Link className="link" to="/register">
              {" "}
              <li className="btn">Register</li>
            </Link>
            <Link className="link" to="/login">
              <li className="btn">Login</li>
            </Link>
          </ul>
          <div className="user" onClick={() => setOpen(!open)}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <span>Sandeep</span>

            {open && (
              <div className="smallContent">
                <ul>
                  <li>Profile</li>
                  <li>Previous exam</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
