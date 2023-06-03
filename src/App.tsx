import { useRef, useState, useEffect } from "react";
import "./App.css";
import Bank from "./component/bank/bank";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Thankyou from "./component/Thankyou/Thankyou";
import Hkd from "./component/bank/Hkd";
import Screenshot from "./shared/Screenshot";
import Fps from "./component/Fps/Fps";
import Alipay from "./component/ALipay/Alipay";
import Pay from "./component/Pay/Pay";
import LiviBank from "./component/Livi/LiviBank";
import BankChina from "./component/bankchina/BankChina";
import SmallTransfer from "./component/SmallTransfer/SmallTransfer";
import Review from "./component/Review/Review";
import Hangseng from "./component/Hangseng/Hangseng";
import Fly from "./component/Fly1/Fly";
import Scpay from "./component/scpay/Scpay";
import Chan from "./component/chanBank/Chan";
import Fly2 from "./component/Fly2/Fly2";
import Fly3 from "./component/Fly3/Fly3";
import Blue from "./component/Blue/Blue";
import Thank from "./component/thank/Thank";
import Green from "./component/green/Green";
import Orange from "./component/Orange/Orange";
import { DrawingApp } from "./shared/DrawingApp";
import RedCross from "./component/RedCross/RedCross";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("redCross");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
          <div className="app__canvas">
            {value === "BankChina" ? (
              <canvas
                ref={canvasRef as any}
                width={384}
                height={801}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : (
              <canvas
                ref={canvasRef as any}
                width={360}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            )}
          </div>
          {value === "800" && size === "small" && <Hkd amount={amount} />}
          {value === "800" && size === "large" && <Bank amount={amount} />}
          {value === "fps" && <Fps amount={amount} />}
          {/* {value === "thankyou" && <Thankyou amount={amount} />} */}
          {value === "thank" && <Thank amount={amount} />}
          {value === "alipay" && <Alipay amount={amount} />}
          {value === "pay" && <Pay amount={amount} />}
          {value === "livi" && <LiviBank amount={amount} />}
          {value === "BankChina" && <BankChina amount={amount} />}
          {/* {value === "small" && <SmallTransfer />} */}
          {value === "review" && <Review amount={amount} />}
          {value === "hangseng" && <Hangseng amount={amount} />}
          {value === "fly1" && <Fly amount={amount} />}
          {value === "scpay" && <Scpay amount={amount} />}
          {value === "chan" && <Chan amount={amount} />}
          {value === "fly2" && <Fly2 amount={amount} />}
          {value === "fly3" && <Fly3 amount={amount} />}
          {value === "blue" && <Blue amount={amount} />}
          {value === "green" && <Green amount={amount} />}
          {value === "orange" && <Orange amount={amount} />}
          {value === "redCross" && <RedCross  amount={amount} />}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
