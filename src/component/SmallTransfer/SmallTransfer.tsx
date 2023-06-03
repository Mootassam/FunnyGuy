import React from "react";
import "./SmallTranfer.css";
function SmallTransfer() {
  return (
    <div className="app__smalltransfer">
      <div className="smalltransfer__header">
        <div className="sheader__left">
          <div className="time__small"> 12:19</div>
        </div>
        <div className="sheader__right">
          <label htmlFor="" className="time__small">
            {" "}
            61%
          </label>
          <div className="small__battery"></div>
        </div>
      </div>

      <div className="smalltransfer__content">
        <div className="title__acknwledgment">Acknowledgment</div>
      </div>

      <img src="/completed/barlong.png" alt="" />

      <div className="small__transcationcompleted">
        <div className="completedcirlce">
          <img src="/completed/check.png" alt="" width={20} />
        </div>
        <div className="completed__right">
          <div className="completed__top">Transaction completed</div>
          <div className="completed__bottom">
            Reference number: N30788630033
          </div>
        </div>
      </div>

      <div className="pay__receieved">
        <span>Payee has received your transfer.</span>
      </div>

      <div className="app__favourite">
        <div>
          <span>Favourite payee</span>
        </div>
        <div>
          <img src="/completed/barh.png" alt="" />
        </div>
        <div>
          <span>Save image</span>
        </div>
      </div>

      <div className="space__between"></div>

      <div className="completed__to">
        <div className="to__left">
          <span>To</span>
        </div>

        <div className="to__right">
          <span>CHAN Y** H**</span>
          <span>105053599</span>
        </div>
      </div>

      <img src="/completed/bar.png" className="small__bar" alt="" />
      <div className="receiving__bank">
        <div className="to__left">
          <span>Receiving bank</span>
        </div>

        <div className="bank__right">
          <span>Recipient default bank</span>
        </div>
      </div>
      <img src="/completed/bar.png" className="small__bar" alt="" />

      <div className="from__bank">
        <div className="to__left">
          <span>Form</span>
        </div>

        <div className="bank__right">
          <span>HKD Savings</span>
          <span>240-3-106301</span>
        </div>
      </div>

      <div className="space__between"></div>

      <div className="detaill__completed">
        <div className="completd__left">
          <span className="bank__left"> Amount</span>
        </div>
        <div className="completed__right">
          <span className="bank__right"> HKD 800.00</span>
        </div>
      </div>


      <img src="/completed/bar.png" alt="" className="small__bar" />

      <div className="detaill__completed">
        <div className="completd__left">
          <span className="bank__left"> Transfer on</span>
        </div>
        <div className="completed__right">
          <span className="bank__right"> Now 07/03/2023</span>
        </div>
      </div>
      <img src="/completed/bar.png" className="small__bar" alt="" />

      <div className="detaill__completeds __smallspace">
        <div className="bank__right __message">
          <div>Message to payee / Bill</div>
          <div>reference</div>
        </div>
        <div>-</div>
      </div>
      <img src="/completed/bar.png"  className="small__bar" alt="" />

      <div className="detaill__mynotes">
        <div className="bank__right">My notes</div>
        <div></div>
      </div>

      <div className="transfer__bottom">

      <div className="detaill__buttons">
        <div className="button__transferpay">
          <span>Back to Transfer & Pay </span>
        </div>

        <div className="button__makeanother">
          <span>Make another transaction </span>
        </div>
      </div>

      <div className="small__bottom">
        <div className="bottom__border"></div>
      </div>

      </div>
    </div>
  );
}

export default SmallTransfer;
