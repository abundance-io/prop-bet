"use client";
import { useEffect, useState } from "react";
import Search from "../common/Search";
import axios from "axios";
import "dotenv/config";

const Header = () => {
  return (
    <section className="">
      {/* <ul className="nav nav-tabs" id="myTabmain" role="tablist">
        {sports.map((sport,key) => 

        <li className="nav-item" role="presentation" key={key}>
          <button
            className="nav-link active"
            id="main-tab"
            data-bs-toggle="tab"
            data-bs-target="#mainTab"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-home"></i>
            </span>
            <span>{sport}</span>
          </button>
        </li>
        )}
      </ul> */}
    </section>
  );
};

export default Header;
