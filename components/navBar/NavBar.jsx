"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "../select/Select";
import uk from "/public/img/header/uk.png";
import logo from "/public/img/logo/logo.png";

const lang = [
  { id: 1, name: "En" },
  { id: 2, name: "Cy" },
  { id: 3, name: "Et" },
];

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="header-section py-1 py-lg-3">
      <div className="container-fluid p-0">
        <div className="header-wrapper">
          <div className="menu__left__wrap">
            <div className="logo-menu px-2">
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <ul className={`main-menu ${active ? "active" : ""}`}>
              <li>
                <Link href="/">
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Sports Betting</span>
                </Link>
              </li>
              <li>
                <Link href="/casino">
                  <span>Casino</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Lucky Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/livecasino">
                  <span>Live Casino</span>
                </Link>
              </li>
              <li>
                <Link href="/promotions">
                  <span>Promotions</span>
                </Link>
              </li>
              <li className="cmn-grp">
                <Link
                  href=""
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#signInPin"
                >
                  <span>Sign In</span>
                </Link>
                <Link
                  href=""
                  className="cmn--btn2"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpPin"
                >
                  <span className="rela">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mneu-btn-grp">
            <Link
              href=""
              className="cmn--btn"
              data-bs-toggle="modal"
              data-bs-target="#signInPin"
            >
              <span>Sign In</span>
            </Link>
            <Link
              href=""
              className="cmn--btn2"
              data-bs-toggle="modal"
              data-bs-target="#signUpPin"
            >
              <span className="rela">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
