import React from "react";
import "./Fly3.css";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import { BsWifi } from "react-icons/bs";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Fly3(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__fly3">
      <div className="fly3__header">
        <div className="header__timefly3">
          {Dates.currentTime()}
          <Left />
        </div>
        <div className="fly3__right">
          <BsWifi color="#333335" />
          <div className="review__datafly3">
            <div className="fly3__1"></div>
            <div className="fly3__2"></div>
            <div className="fly3__3"></div>
            <div className="fly3__4"></div>
            <div className="fly3__5"></div>
          </div>
          <label htmlFor="">{limit}%</label>
          <div className="fly3__battery">
            <div className="top__fly3"></div>
            <div className="battery__fly3">
              <div
                className="level__fly3"
                style={{ height: `${limit}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fly3__content">
        <div className="fly3__image">
          <img src="/Fly3/logo.png" alt="" width={82} />

          <div className="fly3__title">You’ve sent money!</div>

          <div className="fly3__amount">-{Number.hongkong(props.amount)} HKD</div>

          <div className="fly3__bar">
            <img src="Fly3/bar.png" alt="" />
          </div>
        </div>

        <div className="fly3__detaill">
          <div className="detaill__fly3">
            <div className="detaill__fly3__left">From</div>
            <div className="detaill__fly3__right">100544{Number.generateRandom4Number()}</div>
          </div>
          <div className="detaill__fly3 __payto">
            <div className="detaill__fly3__left">Pay to</div>
            <div className="detaill__fly3__right">{Names.generateRandomName()}</div>
          </div>
          <div className="detaill__fly3 __proxyid ">
            <div className="detaill__fly3__left">FPS Proxy ID</div>
            <div className="detaill__fly3__right">10505{Number.generateRandom4Number()}</div>
          </div>
          <div className="detaill__fly3 __datetime">
            <div className="detaill__fly3__left">Date and time</div>
            <div className="detaill__fly3__right">{Dates.fly2()}</div>
          </div>
        </div>
      </div>
      <div className="fly__bottomfly3">
        <div className="done__fly3">
          <span> Done</span>
        </div>

        <div className="mobile__bottom">
          <img src="/Fly3/mobile.png" alt="" width={217} />
        </div>
      </div>
    </div>
  );
}

export default Fly3;
