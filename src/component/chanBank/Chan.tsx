import React from "react";
import "./Chan.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Chan(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__chan">
      <div className="chan__header">
        <div className="chan__left">
          <div className="chan__time">{Dates.currentTime()}</div>
        </div>
        <div className="chan__right">
          <div className="data__chan">
            <div className="chan__1"></div>
            <div className="chan__2"></div>
            <div className="chan__3"></div>
            <div className="chan__4"></div>
          </div>
          <div className="name__data">{Names.generateRandomSignal()}</div>
          <div className="chan__battery">
            <div className="battery__chan">
              <div
                className="chan__level"
                style={{
                  width: `${limit}%`,
                }}
              ></div>
            </div>

            <div className="chan__borderbattery"></div>
          </div>
        </div>
      </div>

      <div className="chan__content">
        <div className="chan__top">
          <div className="chan__circle">
            <img src="/Chan/check.png" alt="" width={17} height={12} />
          </div>
          <div className="chan__title">轉數成功！</div>
        </div>
      </div>

      <div className="chan__detail">
        <div className="detaill__firtline">
          <div className="firstline__left">
            <div className="firstline__circle">
              <span>CH</span>
            </div>
            <div className="detaills">
              <div className="first__top">
                 {Names.generateRandomFullName()}
              </div>
              <div className="first__bottom">{Dates.chan()}</div>
            </div>
          </div>
          <div className="firstline__right">
            <div className="right__amoutn">{Number.hongkong(props.amount)}</div>

            <div className="right__currency">HKD</div>
          </div>
        </div>

        <img src="/Chan/bar.png" alt="" className="chan__bars" />

        <div className="second__line">
          <div className="secondline__left">
            <span>類別</span>
          </div>
          <div className="secondline__right">
            <span>轉数到好友戶口</span>
          </div>
        </div>
        <img src="/Chan/bar.png" alt="" className="chan__bars" />
        <div className="chan__lastline">
          <span>查看詳情</span>
        </div>
      </div>

      <div className="chan__footer">
        <div className="chan__button">
          <span>完成</span>
        </div>

        <div className="chan__submobile"></div>
      </div>
    </div>
  );
}

export default Chan;
