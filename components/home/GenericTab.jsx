"use client";
import Link from "next/link";
import Select from "../select/Select";
import { useEffect, useState } from "react";
import axios from "axios";

const categoris1 = [
  { id: 1, name: "Result 1X2" },
  { id: 2, name: "Result 1X3" },
  { id: 3, name: "Result 1X4" },
  { id: 4, name: "Result 1X5" },
];

const categoris2 = [
  { id: 1, name: "Over/Under" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];

const categoris3 = [
  { id: 1, name: "Both teams to score?" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];

const GenericTab = ({ thead = true }) => {
  const [currentSport, setCurrentSport] = useState("football");
  const [tournamentList, setTournamentList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/sports/${currentSport}`).then((res) => {
      setTournamentList(res.data);
    });
  }, [currentSport]);

  const [tournaments, setTournaments] = useState([]);
  return (
    <>
      <div className="tournament_list">
        {tournamentList.map((tournament) => (
          <div className="tournament_box">{tournament.name}</div>
        ))}
      </div>
      <div className="section__head b__bottom">
        <div className="right__catagoris">
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris1} />
          </div>
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris2} />
          </div>
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris3} />
          </div>
        </div>
      </div>
      <div className="table__wrap">
        {thead && (
          <div className="table__items table__pointnone__items">
            <div className="t__items">
              <div className="t__items__left"></div>
            </div>
            <div className="cart__point"></div>
            <div className="mart__point__items">
              <Link href="" className="twing opo twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box bg__none">
                1
              </Link>
              <Link href="#0box" className="point__box bg__none">
                X
              </Link>
              <Link href="#0box" className="point__box bg__none">
                2
              </Link>
            </div>
            <div className="cart__point cart__point__two">Goals</div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="" className="point__box bg__none">
                  Over
                </Link>
                <Link href="" className="point__box bg__none">
                  Under
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="" className="point__box bg__none">
                  Yes
                </Link>
                <Link href="" className="point__box bg__none">
                  No
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>FK Septemvri Sofia</h6>
              <span className="text">PFC CteSKA Sofia</span>
              <p>
                <Link href="">Live</Link>
                <span>2H 45:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>0</span>
            <span>0</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                8.55
              </Link>
              <Link href="" className="point__box">
                2.70
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box bg__none">
                <i className="icon-lock"></i>
              </Link>
              <Link href="" className="point__box bg__none">
                <i className="icon-star star"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Lampun Warrior FC</h6>
              <span className="text">Prachuap FC</span>
              <p>
                <Link href="">Live</Link>
                <span>1H 05:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>2</span>
            <span>1</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box">
                5.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
          </div>
        </div>
        <div className="table__items">
          <div className="t__items">
            <div className="t__items__left">
              <h6>England</h6>
              <span className="text">USA</span>
              <p>
                <Link href="">Live</Link>
                <span>2H 45:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>0</span>
            <span>0</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart opo">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Korea Republic</h6>
              <span className="text">PFC CSKA Sofia</span>
              <p>
                <Link href="">Live</Link>
                <span>2H 45:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>1</span>
            <span>1</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.05
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box bg__none">
                <i className="icon-lock"></i>
              </Link>
              <Link href="" className="point__box bg__none">
                <i className="icon-star star"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Portugal</h6>
              <span className="text">Netherlands</span>
              <p>
                <Link href="">Live</Link>
                <span>2H 45:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>0</span>
            <span>0</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart opo">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.05
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box bg__none">
                <i className="icon-lock"></i>
              </Link>
              <Link href="" className="point__box bg__none">
                <i className="icon-star star"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Lampun Warrior FC</h6>
              <span className="text">Prachuap FC</span>
              <p>
                <Link href="">Live</Link>
                <span>1H 05:34</span>
              </p>
            </div>
          </div>
          <div className="cart__point">
            <span>0</span>
            <span>0</span>
          </div>
          <div className="mart__point__items">
            <Link href="" className="twing twing__right">
              <i className="icon-twer"></i>
            </Link>
            <Link href="" className="mart opo">
              <i className="icon-pmart"></i>
            </Link>
            <Link href="#0box" className="point__box">
              8.55
            </Link>
            <Link href="#0box" className="point__box">
              2.70
            </Link>
            <Link href="#0box" className="point__box">
              8.50
            </Link>
          </div>
          <div className="cart__point cart__point__two">2,6</div>
          <div className="mart__point__two">
            <div className="mart__point__left">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
            <div className="mart__point__right">
              <Link href="" className="point__box">
                7.05
              </Link>
              <Link href="" className="point__box">
                5.50
              </Link>
            </div>
          </div>
        </div>
        <div className="table__footer">
          <Link href="" className="lobby">
            Open Football lobby
          </Link>
          <Link href="" className="footerpoing">
            <span>322</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GenericTab;
