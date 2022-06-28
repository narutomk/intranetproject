import React, { useState } from "react";

export default function HomeScreen() {
  const [toggle, setToggle] = useState("");
  const [main, setMain] = useState("col-10");
  const [bg, setBg] = useState("bg1");
  const handleToggle = () => {
    if (toggle === "") {
      setToggle("hide");
      setMain("col-12");
    } else {
      setToggle("");
      setMain("col-10");
    }
  };
  return (
    <div className="grid-container">
      <div className="row header theme-dark">
        <div className="col-2 nav-left">
          <div className="toggle" onClick={handleToggle}>
            <span>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </div>
          <div className="logo ">
            <h1>ONT</h1>
            <span>
              <i class="fa fa-wifi" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div className="col-10 align-items-center d-flex justify-content-end">
          <div className="userInfo ">
            <span>
              <i class="fa fa-bell"></i>
            </span>
            <span>
              <i class="fa fa-user"></i>
            </span>
            <span>
              <i class="fa fa-arrow-right-from-bracket"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="main row ">
        <div className={`col-2 menu theme-dark-reversed p-0 ${toggle}`}>
          <ul className="w-100 text-center">
            <li
              onClick={() => {
                setBg("bg0");
              }}
            >
              menu 0
            </li>
            <li
              onClick={() => {
                setBg("bg1");
              }}
            >
              menu 1
            </li>
            <li
              onClick={() => {
                setBg("bg2");
              }}
            >
              menu 2
            </li>
            <li
              onClick={() => {
                setBg("bg3");
              }}
            >
              menu 3
            </li>
            <li
              onClick={() => {
                setBg("bg4");
              }}
            >
              menu 4
            </li>
            <li
              onClick={() => {
                setBg("bg5");
              }}
            >
              menu 5
            </li>
            <li
              onClick={() => {
                setBg("bg6");
              }}
            >
              menu 6
            </li>
          </ul>
        </div>

        <div className={`main-section p-0 ${main} ${bg}`}>{/* main sec */}</div>
      </div>
      <div className="footer theme-dark">
        <p>footer</p>
      </div>
    </div>
  );
}
