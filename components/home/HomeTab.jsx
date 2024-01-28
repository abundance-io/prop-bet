"use client";
import { useState } from "react";
import FooterHome from "../footer/FooterHome";
import MatchFixingSlider from "../sliders/MatchFixingSlider";
import LiveHeightlight from "./LiveHeightlight";
import NextToGo from "./NextToGo";
import Trending from "./Trending";

const HomeTab = () => {
  const [currentSport, setCurrentSport] = useState("football");
  return (
    <div
      className="tab-pane text-white fade show active"
      id="mainTab"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Match Fixing Slider */}
      {/* <MatchFixingSlider /> */}
      {/* Match Fixing Slider */}

      {/* Main body */}
      <div className="main__body__wrap left__right__space">
        {/* Live__heightlight Here */}
        <div className="live__heightlight mb__30">
          <div className="section__title">
            <h4>Events</h4>
            {/* <div className="tournament_list">
              <div className="tournament_box">tournament_box</div>
            </div> */}
          </div>

          {/* Live Height light */}
          <LiveHeightlight />
        </div>
        {/* Live__heightlight End */}

        {/* Next-To-Go Here */}
        {/* Next-To-Go End */}

        {/* Trending section Here */}
        {/* Trending section End */}

        {/* Footer Content Here */}
        <div className="footer__content__section pt-60 pb-60">
          <div className="footer__content__items">
            <h5>Sports Betting at Sportingbet</h5>
            <p></p>
          </div>
          <div className="footer__content__items">
            <h5>Bet online at Sportingbet</h5>
            <p></p>
          </div>
          <div className="footer__content__items">
            <h5>Bet on Football</h5>
            <p></p>
          </div>
        </div>
        {/* Footer Content End */}
      </div>
      {/* Main body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default HomeTab;
