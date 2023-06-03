import React from "react";
import "./Hangseng.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
function Hangseng(props) {
  return (
    <div className="hang__seng">
      <div className="hangseng__header">
        <img src="/Hangseng/logo.png" alt="" width={310} />
      </div>

      <div className="hangseng__subheader">
        <div className="subheader__left">
          <div className="subherder__circle">
            <img src="Hangseng/check.png" alt="" width={34} />
          </div>
        </div>

        <div className="subheader__right">
          <div className="subheader__title">已完成交易 </div>
          <div className="subheader__bottom">
            <div className="subheader__description">
              <div className="first__description">參考編號</div>
              <div className="second__description">N314{Number.generateRandom8Number()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hangseng__ __top">
        <img src="/Hangseng/bar.png" alt="" />
      </div>

      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">收款戶囗</label>
        </div>
        <div className="hangseng__right">
          <label htmlFor="" className="caracter__">
            <span style={{ paddingRight: 5 }}>YU</span>
            <span style={{ paddingRight: 8 }}>W**</span>
            <span>M***</span>
          </label>
          <label htmlFor="" className="hangseng__message">
            10543{Number.generateRandom4Number()}
          </label>
        </div>
      </div>
      <div className="hangseng__ __24">
        <img src="/Hangseng/bar.png" alt="" />
      </div>
      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">收款銀行</label>
        </div>
        <div className="hangseng__right">
          <label htmlFor="">預設收款銀行</label>
        </div>
      </div>
      <div className="hangseng__ __28">
        <img src="/Hangseng/bar.png" alt="" />
      </div>
      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">支賬戶囗</label>
        </div>
        <div className="hangseng__right">
          <span className="hagseng__text">港元 储蓄</span>
          <span className="number__">210-310 *** -882</span>
        </div>
      </div>

      <div className="band__"></div>

      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">金額</label>
        </div>
        <div className="hangseng__right hangseng__amount">
          <span className="hagseng__text">港元</span>
          <span className="number__">{Number.hongkong(props.amount)}</span>
        </div>
      </div>
      <div className="hangseng__" style={{paddingTop :22}}>
        <img src="/Hangseng/bar.png" alt="" />
      </div>
      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">金額</label>
        </div>
        <div className="hangseng__right">
          <div className="hangseng__right hangseng__amount">
            <span className="hagseng__text">即時</span>
            <span className="number__ __datew">
              

              {Dates.hangSeng()}</span>
          </div>
        </div>
      </div>
      <div className="hangseng__" style={{ paddingTop: 22 }}>
        <img src="/Hangseng/bar.png" alt="" />
      </div>
      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">致收款人訊息/ 賬單備考</label>
        </div>
        <div className="hangseng__right"></div>
      </div>
      <div className="hangseng__" style={{ paddingTop: 22 }}>
        <img src="/Hangseng/bar.png" alt="" />
      </div>

      <div className="hangseg__detail">
        <div className="hangseng__left">
          <label htmlFor="">交易編號</label>
        </div>
        <div className="hangseng__right hd__number">HD1{Dates.hangseng()}76{Number.genrateRandom6Number()}</div>
      </div>
    </div>
  );
}

export default Hangseng;
