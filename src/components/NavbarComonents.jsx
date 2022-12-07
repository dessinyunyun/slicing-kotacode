import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./navbar.css";

import React from "react";

const NavbarComonents = () => {
  const [mobileMode, setmobileMode] = React.useState(false);
  const [menuActive, setmenuActive] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 840) {
      setmobileMode(true);
    }
  }, []);

  window.addEventListener("resize", function () {
    this.window.innerWidth < 840 ? setmobileMode(true) : setmobileMode(false);
  });

  const menuStyles = {
    backgroundColor: menuActive ? "rgb(19, 164, 88)" : "",
  };

  return (
    <div className="navbar position-fixed py-3">
      <div className="container-fluid nav-contain   ">
        <div className="row">
          <div className="col-2">
            <div className="nav-brand">
              <Link to="/">
                {" "}
                <img src="./logo.svg" alt="" width="120px" />
              </Link>
            </div>
          </div>
          <div className={mobileMode ? "col-10 d-flex justify-content-end" : "col-10"}>
            {mobileMode ? (
              <div className="burger-menu d-flex align-items-center" style={menuStyles}>
                {menuActive ? (
                  <i className="fi fi-sr-menu-burger m-auto d-flex " style={{ color: "white" }} onClick={() => setmenuActive(false)}></i>
                ) : (
                  <i className="fi fi-sr-menu-burger m-auto  d-flex " style={{ color: "rgb(19, 164, 88)" }} onClick={() => setmenuActive(true)}></i>
                )}
              </div>
            ) : (
              <div className="nav-content d-flex align-items-center">
                <div className="nav-menu fw-bold">
                  <Link to="/pokemon">Pokemon</Link>
                  <Link to="/pokemon">Produk</Link>
                  <Link to="/pokemon">FAQ</Link>
                  <Link to="/pokemon">Events</Link>
                  <Link to="/pokemon">Partnership</Link>
                </div>
                <div className="nav-auth d-flex gap-2 align-items-center">
                  <Link className="masuk" to="/pokemon">
                    Masuk
                  </Link>
                  <Link className="daftar" to="/pokemon">
                    Daftar
                  </Link>
                </div>
              </div>
            )}

            {menuActive ? (
              <div className="nav-out" onClick={() => setmenuActive(false)}>
                <div className="nav-content  align-items-center">
                  <div className="navigasi border-bottom py-3">
                    {" "}
                    <h2>Navigasi</h2>
                    <div className="nav-menu fw-bold">
                      <Link to="/pokemon">
                        <i class="fi fi-ss-dreidel"></i>Pokemon
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-bs-browser"></i>Tentang
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-ss-bulb"></i>FAQ
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-ss-calendar"></i>Events
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-ss-user"></i>Leaderboard
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-ss-users"></i>Partnership
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-sr-tags"></i>Tags
                      </Link>
                    </div>
                  </div>
                  <div className="produk border-bottom py-3">
                    {" "}
                    <h2>Produk</h2>
                    <div className="nav-menu fw-bold">
                      <Link to="/pokemon">
                        <i class="fi fi-bs-browser"></i>Forum QnA
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-br-list"></i>Blogs
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-ss-briefcase"></i>Jobs
                      </Link>
                    </div>
                  </div>
                  <div className="auth border-bottom py-3">
                    {" "}
                    <h2>Login</h2>
                    <div className="nav-menu fw-bold">
                      <Link to="/pokemon">
                        <i class="fi fi-bs-sign-in-alt"></i>Login
                      </Link>
                      <Link to="/pokemon">
                        <i class="fi fi-rr-user-add"></i>Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComonents;
