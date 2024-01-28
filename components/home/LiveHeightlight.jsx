"use client";
import LiveBasketballTab from "./LiveBasketballTab";
import LiveCricketTab from "./LiveCricketTab";
import GenericTab from "./GenericTab";
import LiveTableTennisTab from "./LiveTableTennisTab";
import LiveTennisTab from "./LiveTennisTab";
import LiveVollyballTab from "./LiveVollyballTab";
import { useState, useEffect } from "react";
import axios from "axios";

const LiveHeightlight = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/sports`).then((response) => {
      setSports(response.data["sports"]);
    });
  }, [sports]);
  return (
    <>
      <div className="heightlight__tab">
        <div className="nav b__bottom" id="nav-tabheight" role="tablist">
          <button
            className="nav-link active"
            id="lightlighttab"
            data-bs-toggle="tab"
            data-bs-target="#height1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>Football</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttab3basket"
            // data-bs-toggle="tab"
            // data-bs-target="#basketbtab"
            type="button"
            role="tab"
            aria-selected="false"
            // onClick={}
          >
            <span className="icons">
              <i className="icon-basketball"></i>
            </span>
            <span>Basketball</span>
          </button>
        </div>
      </div>

      <div className="height__table">
        <div className="tab-content" id="nav-tabContentheight">
          {/* Football */}
          <div
            className="tab-pane fade text-white show active"
            id="height1"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table">
              {/* Live Football Tab */}
              <GenericTab />
            </div>
          </div>
          {/* Football */}
        </div>
      </div>
    </>
  );
};

export default LiveHeightlight;
