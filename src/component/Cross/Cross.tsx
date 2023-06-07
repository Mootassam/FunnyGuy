import React from "react";
import "./Cross.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";

import { BsAlarmFill } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";

function Cross(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__cross">
      <div className="cross__header">
        <div className="cross__top">
          <div className="cross__left">
            <span className="cross__time">{Dates.currentTime()}</span>
            <Left />
          </div>

          <div className="cross__right">
            <BsAlarmFill color="#4F4F4F" size={10.3} />
            <FiWifi color="#4F4F4F" size={13} />
            <div className="data__cross">
              <div className="d__c1"></div>
              <div className="d__c2"></div>
              <div className="d__c3"></div>
              <div className="d__c4"></div>
            </div>

            <div className="data__cross">
              <div className="d__c1"></div>
              <div className="d__c2"></div>
              <div className="d__c3"></div>
              <div className="d__c4"></div>
            </div>

            <span className="percent__cross">{limit}%</span>
            <div className="batt__cross">
              <div className="top__box"></div>
              <div className="box__batt">
                <div
                  className="level__cross"
                  style={{ height: `${limit}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cross__subheader">
          <div></div>
          <div>
            <img src="/cross/headphone.png" alt="" width={20} />
          </div>
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
                <div className="blog__customername">
                  {Names.generateRandomName()}
                </div>
                <div className="blog__service">港元储蓄服戶</div>
                <div className="blog__code">
                  012***{Number.generate3RandomNumber()}
                </div>
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

        <div className="cross__blog __1">
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
              <span className="code__tr">
                {" "}
                12{Dates.hangseng()}F316{Number.genrateRandom6Number()}
              </span>
              <span className="copy__code">
                <img src="cross/copy.png" width={16} alt="" />
                複製編號
              </span>
            </div>
          </div>

          {/* add the item  */}
          <img src="/cross/bar.png" alt="" />

          <div className="blog__number">
            <div className="detaill__datetransaction">金额</div>

            <div className="number__right">
              <div className="number__top">
                <span className="number__hongkong">港元</span>
                <span className="number__">
                  {Number.hongkongstyle3(props.amount)}
                </span>
                <span className="small__zero">.00</span>
              </div>
              <div className="number__bottom">
                <span className="transfer__fee">豁免轉賬費用</span>
              </div>
            </div>
          </div>
        </div>

        <div className="opinion">我們重視您的意見</div>

        <div className="cross__description">
          根掳信次的聘脸，你金堆蔗业昵路给你的家人
        </div>

        <div className="cross__bottom">
          <img src="/cross/mobile.png" alt="" width={211} />
        </div>
      </div>
    </div>
  );
}

export default Cross;
