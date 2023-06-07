import React from "react";
import "./green.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
import { FaWifi } from "react-icons/fa";
function Green(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__green">
      <div className="green_header">
        <div className="green__top">
          <div className="green__time">
            <span className="time__green">{Dates.currentTime12()}</span>
          </div>
          <div className="grenn__battery">
            <div className="hdk__data">
              <div className="data__1">
                <div></div>
                <div className="div__4"></div>
                <div className="div__5"></div>
                <div className="div__6 __grey"></div>
              </div>
              <div className="data__2">
                <div></div>
                <div></div>
                <div className=""></div>
                <div className="__grey"></div>
              </div>
            </div>
            <FaWifi size={14} />
            <div className="battery__green">
              <img
                src="/Green/charge.png"
                alt=""
                height={10}
                className="charge"
              />

              <div
                className="greenn__level"
                style={{ width: `${limit}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="green__subheader">
          <div></div>
          <div className="green__completed">已完成</div>
          <div>
            <img src="/Green/phone.png" alt="" width={16} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <img src="/Green/bar.png" alt="" />
      </div>
      <div className="green__design">
        <div className="green__circle">
          <img src="/Green/check.png" width={25} alt="" />
        </div>
        <div className="design__circle">
          <div className="green__completeds">已完成交易</div>
          <div className="green__date">
            <span className="date__text"> 參考編號:</span>
            <span className="date__time">
              N60456{Number.genrateRandom6Number()}
            </span>
          </div>
        </div>
      </div>

      <div className="auto">
        <img src="/Green/bars.png" alt="" />
      </div>

      <div className="green__icon">
        <div className="green__heart">
          <img src="/Green/heart.png" alt="" width={18} />

          <label htmlFor="" className="common__payee">
            常用收款人
          </label>
        </div>

        <div className="hor__bar">
          <img src="/Green/horbar.png" alt="" height={23} />
        </div>

        <div className="green__heart">
          <img src="/Green/save.png" alt="" width={18} />

          <label htmlFor="" className="common__payee">
            常用收款人
          </label>
        </div>
      </div>
      <div className="grenn__seperate"> </div>
      <div className="green__detaill">
        <div className="green__first">
          <div className="detaill__gleft">收款戶口</div>
          <div className="detaill__gright">
            <div className="grenn__customername">H K R** C**** </div>
            <div className="grenn__number">388-553950-001</div>
          </div>
        </div>

        <div className="bar__auto">
          <img src="/Green/bars.png" alt="" />
        </div>

        <div className="green__first">
          <div className="detaill__gleft">收款銀行</div>
          <div className="detaill__gright">
            <div className="green__bank">恒生銀行有限公司 (024)</div>
          </div>
        </div>
        <div className="bar__auto p__19">
          <img src="/Green/bars.png" alt="" />
        </div>

        <div className="secondline__">
          <div className="detaill__gleft">支賬戶口</div>

          <div className="detaill__rightg">
            <div className="hongkong__dollar"> 港元储蓄</div>
            <div className="hongkong__number">
              254-34{Number.generate4RandomNumber()}-
              {Number.generate3RandomNumber()}
            </div>
          </div>
        </div>
      </div>
      <div className="grenn__seperate __pg17"> </div>

      <div className="third__line">
        <div className="detaill__gleft">金額</div>
        <div className="detaill__gright">
          <div className="green__amount">
            {" "}
            港元 {Number.hongkong(props.amount)}
          </div>
        </div>
      </div>

      <div className="bar__auto">
        <img src="/Green/bars.png" alt="" />
      </div>

      <div className="third__line">
        <div className="detaill__gleft">轉賬日期</div>
        <div className="detaill__gright">
          <div className="green__amount"> 即時 {Dates.hangSeng()}</div>
        </div>
      </div>
      <div className="bar__auto">
        <img src="/Green/bars.png" alt="" />
      </div>
      <div className="third__line">
        <div className="detaill__gleft">我的備註</div>
        <div className="detaill__gright"></div>
      </div>

      <div className="seperate__grey">
        <div className="hidetext">甘做计音审顶</div>
        <div></div>
      </div>

      <div className="logo__absoulte">
        <img src="/Green/green.png" alt="" width={51} className="logo__green" />
      </div>
      <div className="green__bottom">
        <div className="button__colletions">
          <div className="button__green">
            <span>返回轉賬及付款</span>
          </div>

          <div className="green__grey">
            <span>返回轉賬及付款</span>
          </div>
        </div>

        <div className="green__border"></div>
      </div>
    </div>
  );
}

export default Green;
