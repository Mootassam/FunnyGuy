import React from "react";
import "./Ewallets.css";
import { IoIosWifi } from "react-icons/io";
function Ewallets() {
  return (
    <div className="app__ewallets">
      <div className="ewallets__header">
        <IoIosWifi color="#fff" size={20} />
      </div>
      <div className="ewallets__content">
        <div className="ewallets__top">
          <span className="bank__ewallets">Banks / eWallets Payment</span>
        </div>

        <div className="bank__reference">
          <span></span>
          <span className="ewallets__ref">Ref.No TT116769663</span>
        </div>

        <div className="ewallets__logo">
          <img src="/ewallets/logo.png" alt="" width={54} />
        </div>

        <div className="ewallets__amount">
          <span className="amount__ewallets">- $ 200.00</span>
        </div>

        <div className="ewallets__detaill">
          <div className="firstline">
            <div className="label__name">Transaction Date</div>
            <div className="date__fps"> 2023-06-04 21:46:32</div>
          </div>

          <img src="/ewallets/bar.png" alt="" />

          <div className="firstline __receiver">
            <div className="label__name">Receiver Name</div>
            <div className="bank__receiver"> hongKong Red cross</div>
          </div>

          <img src="/ewallets/bar.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ewallets;
