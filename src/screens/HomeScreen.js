import React, { useState } from "react";

export default function HomeScreen() {
  const [toggle, setToggle] = useState("");
  const [main, setMain] = useState("col-10");
  const [bg, setBg] = useState("bg0");
  const [active, setActive] = useState(null);
  const handleToggle = () => {
    if (toggle === "") {
      setToggle("hide");
      setMain("col-11");
    } else {
      setToggle("");
      setMain("col-10");
    }
  };
  return (
    <div className="grid-container">
      <div className="row header theme-dark">
        <div
          className={toggle === "hide" ? "nav-left col-1" : "nav-left col-2"}
        >
          <div className="toggle" onClick={handleToggle}>
            <span>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </div>
          <div className="logo ">
            {/* <h1>ONT</h1>
            <span>
              <i class="fa fa-wifi" aria-hidden="true"></i>
            </span> */}
            <span>
              <i class="fa-brands fa-apple"></i>
            </span>
          </div>
        </div>

        <div
          className={
            toggle === "hide"
              ? "align-items-center d-flex justify-content-end col-11"
              : "align-items-center d-flex justify-content-end col-10 "
          }
        >
          <div className="userInfo ">
            <span>
              <i class="fa-solid fa-bell"></i>
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
        <div
          className={` menu theme-dark-reversed p-0 ${
            toggle === "hide" ? "col-1" : "col-2"
          }`}
        >
          <ul className="w-100 text-center">
            <li
              onClick={() => {
                setBg("bg0");
                setActive(0);
              }}
              className={active === 0 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-address-book" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg1");
                setActive(1);
              }}
              className={active === 1 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-i-cursor" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg2");
                setActive(2);
              }}
              className={active === 2 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-fast-forward" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg3");
                setActive(3);
              }}
              className={active === 3 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg4");
                setActive(4);
              }}
              className={active === 4 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-upload" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg5");
                setActive(5);
              }}
              className={active === 5 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-unlock" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
            </li>
            <li
              onClick={() => {
                setBg("bg6");
                setActive(6);
              }}
              className={active === 6 ? "active" : ""}
            >
              {toggle === "hide" ? (
                <span>
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </span>
              ) : (
                <>menu 0</>
              )}
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
