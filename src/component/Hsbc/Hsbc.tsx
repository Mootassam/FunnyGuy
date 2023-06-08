import React from "react";
import "./hsbc.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
function Hsbc(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const kongKongRedCross = () => {
    return (
      <div className="hsbc__">
        <span>Hong Kong Red Cross</span>
        <span>024 - 恒生銀行有限公司</span>
        <span>388553950001</span>
      </div>
    );
  };

  const bankChina = () => {
    return (
      <div className="hsbc__">
        <span>Hong Kong Red Cross</span>
        <span>012- 中国银行（香港）有限公司</span>
        <span>01280600028173</span>
      </div>
    );
  };

  const bea = () => {
    return (
      <div className="hsbc__">
        <span>Hong Kong Red Cross</span>
        <span>015- 東亞銀行有限公司</span>
        <span>015514104011221</span>
      </div>
    );
  };

  const randomBank = () => {
    const banks = [kongKongRedCross, bankChina, bea];
    const randomIndex = Math.floor(Math.random() * banks.length);
    return banks[randomIndex]();
  };

  return (
    <div className="app__hsbc">
      <div className="hsbc__header">
        <div className="hsbc__left">
          <div className="hsbc__data">
            <div className="hsbc__data1"></div>
            <div className="hsbc__data2"></div>
            <div className="hsbc__data3"></div>
            <div className="hsbc__data4"></div>
          </div>
          <div className="hsbc__name">CMHK</div>
          <div className="hsbc__dataname">LTE</div>
        </div>
        <div className="hsbc__center">
          <span className="hsbc__time">{Dates.currentTime()}</span>
        </div>
        <div className="hsbc__right">
          <span className="number__percent">{limit}%</span>
          <div className="shbc__battery">
            <div className="battery__shbc">
              <span
                className="shbc__level"
                style={{ width: `${limit}%` }}
              ></span>
            </div>
            <div className="shbc__border"></div>
          </div>
        </div>
      </div>
      <div className="hsbc__subheader">
        <div className="hsbc__closeicon">
          <img src="/hsbc/close.png" width={17} alt="" />
        </div>
        <div className="hsbc__title">
          <span>完成指示</span>
        </div>
      </div>
      <img src="/hsbc/bar.png" alt="" />
      <div className="hsbc__detaill">
        <div className="hsbc__top">
          <div className="hsbc__cirlce">
            <img src="/hsbc/check.png" width={34} />
          </div>
          <label className="hsbc__thank">多謝</label>
          <span className="hsbc__success">
            <div className="__success">轉賬已成功入賬</div>
            <a className="success__a"> O </a>
          </span>
        </div>

        <div className="hsb__specialdetail">
          <div className="specialdetail __p16">
            <div className="hsbc__left">
              <span>支賬戶口</span>
            </div>
            <div className="hsbc__right">
              <div className="hsbc__">
                <span>滙豐 One 港元储蓄</span>
                <span>
                  634-89{Number.generate4RandomNumber()}-
                  {Number.generate3RandomNumber()}
                </span>
              </div>
            </div>
          </div>
          <img src="hsbc/semibar.png" alt="" className="semibar" />

          <div className="specialdetail __p65">
            <div className="hsbc__left">
              <span>入賬戶囗</span>
            </div>
            <div className="hsbc__right">{randomBank()}</div>
          </div>

          <img src="hsbc/semibar.png" alt="" className="semibar" />

          <div className="specialdetail __p27">
            <div className="hsbc__left">
              <span>金額</span>
            </div>
            <div className="hsbc__right">
              <div className="hsbc__">
                <span>{Number.hongkong(props.amount)} HKD</span>
              </div>
            </div>
          </div>

          <img src="hsbc/semibar.png" alt="" className="semibar" />

          <div className="specialdetail __p275">
            <div className="hsbc__left">
              <span>費用</span>
            </div>
            <div className="hsbc__right">
              <div className="hsbc__">
                <span>獲豁免</span>
              </div>
            </div>
          </div>

          <img src="hsbc/semibar.png" alt="" className="semibar" />

          <div className="specialdetail __p285">
            <div className="hsbc__left">
              <span>轉賬日期</span>
            </div>
            <div className="hsbc__right">
              <div className="hsbc__">
                <span>即時</span>
              </div>
            </div>
          </div>

          <img src="hsbc/semibar.png" alt="" className="semibar" />

          <div className="specialdetail __last">
            <div className="hsbc__left">
              <span>參考編號</span>
            </div>
            <div className="hsbc__right">
              <div className="hsbc__">
                <span>N60251{Number.genrateRandom6Number()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hsb__bottom">
          <div className="button__hsb">
            <span className="">進行另一項轉賬</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hsbc;
