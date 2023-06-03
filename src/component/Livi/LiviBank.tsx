import React from "react";
import "./Livi.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function LiviBank(props) {
  return (
    <div className="app__livi">
      <div className="livi">
        <div className="livi__logo">
          <img src="/livi/livi.png" alt="" width={168} />
        </div>

        <div className="livi__content">
          <div className="contentlivi__top">
            <div className="livi__transferamount">
              <label htmlFor="">Transfer Amount</label>
              <label htmlFor="" className="livi__">
                <div className="livi__totalAmount">
                  {Number.hongkong(props.amount)}
                </div>
                <div className="currency__livi">HKD</div>
              </label>
            </div>

            <div className="livi__recipient">
              <label htmlFor="" className="title__livi">
                Recipient
              </label>
              <label htmlFor="" className="reciptient__label">
                {Names.generateRandomFullName()}
              </label>
            </div>

            <div className="livi__account">
              <label htmlFor="" className="title__livi">
                Recipient’s Account
              </label>
              <label htmlFor="" className="reciptient__account">
                +852-67598857
              </label>
            </div>

            <div className="livi__receiving">
              <label htmlFor="" className="title__livi">
                Receiving Bank
              </label>
              <label htmlFor="">
                <div className="bank__number"> 389</div>
                <div className="bank__limit"> Mox Bank Limited</div>
              </label>
            </div>

            <div className="livi__transactiontime">
              <label htmlFor="" className="title__livi">
                Transaction Time
              </label>
              <label htmlFor="" className="livi__time">
                {Dates.lividate()}
              </label>
            </div>

            <div className="livi__referencenumber">
              <label htmlFor="" className="title__livi">
                Reference Number
              </label>
              <label htmlFor="" className="livi__reference">
                {Dates.generateRandomDateNumber()}025010050000
                {Number.generateRandom7Number()}
              </label>
            </div>
          </div>
          <div className="content__livibottom">
            <div className="livibottom__left">
              <img src="/livi/qrcode.png" alt="" width={82} />
            </div>
            <div className="livibottom__right">
              <span className="image__party">
                <img src="/livi/party.png" width={16} />
                Sharing good stuff with you
              </span>
              <span>Scan the QR Code to enjoy account opening</span>
              <span>referral reward!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiviBank;
