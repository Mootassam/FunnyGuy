import React from "react";
import "./Cross.css";
function Cross(props) {
  return (
    <div className="app__cross">
      <div className="cross__header">
        <div className="cross__top">
          <div className="cross__left">
            <span className="cross__time">17:47</span>
          </div>

          <div className="cross__right">
            <span className="percent__cross">43%</span>
            <div className="batt__cross">
              <div className="top__box"></div>
              <div className="box__batt">
                <div className="level__cross"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cross__subheader">
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="detaill__cross">
        <div className="cross__blog">
          <div className="blog__header">
            <span className="blog__title">轉入/轉出賬戶</span>
          </div>

          <div className="blog__detaill">
            <div className="detaill__first">
              <div className="blog__left">
                <span className="blog__title">付款人/賬戶</span>
              </div>
              <div className="blog__right">
                <div className="blog__customername">NG S** k**</div>
                <div className="blog__service">港元储蓄服戶</div>
                <div className="blog__code">012***734</div>
              </div>
            </div>

            <div className="detaill__second">
              <div className="blog__left">
                <span className="blog__title">收款人/賬户</span>
              </div>
              <div className="blog__right">
                <div className="blog__bankname">HONG KONG RED</div>
                <div className="blog__bankname">CROSS</div>
                <div className="blog__code">164279317</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cross__blog">
          <div className="blog__header">
            <span className="blog__title">轉賬詳情</span>
          </div>

          <div className="detaill__firstline">
            <div className="detaill__datetransaction">轉賬日期</div>
            <div className="detaill__datetransaction">即時</div>
          </div>

          <div className="detaill__secondline">
            <div className="detaill__datetransaction">轉賬編號</div>
            <div className="transaction__code">
              <span className="code__tr"> 12230603F316154773</span>
              <span className="copy__code">複製編號</span>
            </div>
          </div>

          <img src="/cross/bar.png" alt="" />

          <div className="blog__number">
            <div className="number__left">金额</div>

            <div className="number__right">
              <div className="number__top">
                <span className="number__hongkong">港元</span>
                <span className="number__">200</span>
                <span className="small__zero">.00</span>
              </div>
              <div className="number__bottom">
                <span className="transfer__fee">豁免轉賬費用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cross;
