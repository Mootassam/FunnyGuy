import React from "react";
import "./bank.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";
function Hkd(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__hkd">
      <div className="hdk__header">
        <div className="hkd__time">{Dates.currentTime()}</div>
        <div className="hdk__right">
          <div className="hdk__data">
            <div className="data__1">
              <div></div>
              <div className="div__4"></div>
              <div className="div__5"></div>
              <div className="div__6"></div>
            </div>
            <div className="data__2">
              <div></div>
              <div></div>
              <div className="__grey"></div>
              <div className="__grey"></div>
            </div>
          </div>
          <div className="hdk__4g">{Names.generateRandomSignal()}</div>
          <div className="styling__battery">
            <div className="battery">
              <div
                className="battery__levelbank"
                style={{ width: `${limit}%` }}
              ></div>
            </div>
            <div className="battery__bar"></div>
          </div>
        </div>
      </div>
      <div className="hkd__content">
        <div className="content__image">
          <img src="hkd/hkd.png" width={10} />
        </div>
        <div className="content__word">交易詳情</div>
      </div>

      <div className="app__amount">
        <div className="amount__header">交易金額</div>
        <div className="amoutn__amount">
          <div className="currency__">HKD</div>
          <div className="currency">
            <div className="currency__amount">
              {" "}
              {Number.hongkong(props.amount)}
            </div>
            <div className="currency__cr">CR</div>
          </div>
        </div>
      </div>

      <div className="amounmt__bar"></div>

      <div className="hkd__address">
        <div>
          <div className="hkd__left">交易編號</div>
          <div className="hkd__right">
            ENS{Dates.generateRandomDateNumber()}00
            {Number.genrateRandom6Number()}
          </div>
        </div>
        <div>
          <div className="hkd__left">交易類型</div>
          <div className="hkd__right">FPS Inward Fund Transfer</div>
        </div>
        <div>
          <div className="hkd__left">交易賬號</div>
          <div className="hkd__right">PAO BANK (7522**0368)</div>
        </div>
        <div>
          <div className="hkd__left">交易幣種</div>
          <div className="hkd__right">HKD</div>
        </div>
        <div>
          <div className="hkd__left">交易时間</div>
          <div className="hkd__right">{Dates.datetime()}</div>
        </div>
        <div>
          <div className="hkd__left">對手銀行</div>
          <div className="hkd__right"></div>
        </div>
        <div>
          <div className="hkd__left">對手户名</div>
          <div className="hkd__right">MISS CHEONG CHING YEE DIANA</div>
        </div>
        <div>
          <div className="hkd__left">交易備註</div>
          <div className="hkd__right"></div>
        </div>
      </div>

      <div className="hkd__bottom"></div>
    </div>
  );
}

export default Hkd;
