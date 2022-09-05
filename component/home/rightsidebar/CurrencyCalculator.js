import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
const brazilFlag = "/images/brazilFlag.svg";
const canadaFlag = "/images/canadaFlag.svg";

function CurrencyCalculator() {
  return (
    <div className="calculator">
      <div className="calculator-title">
        <h2>Quick Currency Converter</h2>
      </div>
      <form>
        <label>
          <div className="currency-input">
            <small>You Send</small>
            <input type="number" placeholder="1,000" />
          </div>
          <p className="currency-dropdown">
            <img src={canadaFlag} className="flag" alt="flag" /> CAD
            <span className="currency-icons">
              <AiFillCaretDown />
            </span>
          </p>
        </label>
        <div className="logic-box">
          <p>
            <span class="logic-symbols">
              <small>–</small>
            </span>{" "}
            20.20 CAD<span class="logic-description">Fee (Including IOF)</span>
          </p>
          <p>
            <span class="logic-symbols">
              <small>=</small>
            </span>{" "}
            970.80 CAD
            <span className="logic-description">Amount we'll convert</span>
          </p>
          <p>
            <span className="logic-symbols">
              <small>÷</small>
            </span>{" "}
            2,27361
            <span className="logic-description">Commercial rate (144 hrs)</span>
          </p>
        </div>
        <label>
          <div className="currency-input">
            <small>They Receive</small>
            <input type="number" placeholder="3,900" />
          </div>
          <p className="currency-dropdown">
            <img src={brazilFlag} className="flag" alt="flag" /> BRL
            <span className="currency-icons">
              <AiFillCaretDown />
            </span>
          </p>
        </label>
        <div className="notice">
          <p>This page is refreshed every 60 seconds</p>
        </div>
        <div className="form-submit">
          <button className="submit-button">Send this Amount</button>
        </div>
      </form>
    </div>
  );
}

export default CurrencyCalculator;
