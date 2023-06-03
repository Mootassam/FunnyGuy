import React from "react";
import "./Blue.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Blue(props) {
  return (
    <div className="app__blue">
      {/* stlying the header  */}
      <div className="blue__header">
        <div></div>
        <div className="blueheader__right">完成</div>
      </div>
      {/* styling the content  */}
      <div className="blue__content">
        <div className="content__headesr">
          <div className="blue__circle">
            <img src="/blue/check.png" alt="" width={25} />
          </div>
          <div className="blue__textunderblue">轉賬成功</div>
          <div className="blue__circledescription">
            <span className="blue1__description" style={{ paddingRight: 7 }}>
              成功轉賬HKD
            </span>
            <span className="blue2__description" style={{ paddingRight: 3 }}>
              {Number.hongkong(props.amount)}
            </span>
            <span className="blue__caractere" style={{ paddingRight: 7 }}>
              至
            </span>
            <span className="blue__doublecaractere" style={{ paddingRight: 5 }}>
              YU
            </span>
            <span className="blue__one">
              {Names.generateRandomCharacter()}{" "}
              <p style={{ fontSize: 30 }}> ••</p>
            </span>
          </div>
          <span className="blue__one">
            {Names.genereateRandomCharacter()}
            <p style={{ fontSize: 30, letterSpacing: -2 }}>•••</p>
          </span>
          <div className="blue__lastdescription">
            交易編號 MBKFT{Dates.generatedate()}D084783{" "}
          </div>
          <img src="/blue/bar.png" alt="" style={{ paddingTop: 42 }} />
        </div>
      </div>

      {/* Stlying the blue detail */}

      <div className="blue__detaill">
        <div className="first__detail">
          <div className="label__detail">收款人资料</div>
          <div className="label__numb">
            10543{Number.generateRandom4Number()}
          </div>
        </div>

        <div className="second__detail">
          <div className="label__detail">轉賬目的</div>
          <div className="detail__label">個人支出</div>
        </div>

        <div className="third__detail">
          <div className="label__detail">轉賬目的</div>
          <div className="label__date">{Dates.blue()}</div>
        </div>

        <div className="fast__transfer">
          Fast Transfer will be made instantly
        </div>

        <div className="description__oneconenct">
          <div>
            <span className="chinese__text">經</span>
            <span className="chinese__text" style={{ paddingRight: 7 }}>
              「轉數快]
            </span>
            <span className="chinese__text" style={{ paddingRight: 5 }}>
              轉賬至
            </span>
            <span className="oneconnect__description">PING AN ONECONNECT</span>
          </div>
          <div>
            <span className="oneconnect__description">
              BANK (HONG KONG) LTD 392
            </span>
          </div>
        </div>
      </div>

      {/* styling the footer  */}

      <div className="blue__footer">
        <span className="footer__text"> 通知親友 </span>
      </div>
    </div>
  );
}

export default Blue;
