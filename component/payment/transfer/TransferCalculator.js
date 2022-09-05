import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

const brazilFlag = "/images/brazilFlag.svg";
const canadaFlag = "/images/canadaFlag.svg";

function TransferCalculator() {
  return (
    <div className="section-two">
      <div className="section-title pt-10">
        <p>How much you would like to send?</p>
      </div>
      <div className="box-container">
        <div id="currency-calculator">
          <form>
            <label>
              <div className="currency-input">
                <small>You Send</small>
                <input type="number" placeholder="1,000" />
              </div>
              <p className="ant-dropdown-trigger currency-dropdown">
                <img src={canadaFlag} className="flag" alt="flag" />
                CAD
                <span className="material-icons">
                  <AiFillCaretDown className="text-gray-600" />
                </span>
              </p>
            </label>
            <div className="logic-box">
              <p>
                <span className="logic__symbols">
                  <small>–</small>
                </span>{" "}
                20.20 CAD
                <span className="logic__description">Fee (Including IOF)</span>
              </p>
              <p>
                <span className="logic__symbols">
                  <small>=</small>
                </span>{" "}
                970.80 CAD
                <span className="logic__description">Amount we'll convert</span>
              </p>
              <p>
                <span className="logic__symbols">
                  <small>÷</small>
                </span>{" "}
                2,27361
                <span className="logic__description">
                  Commercial rate (144 hrs)
                </span>
              </p>
            </div>
            <label>
              <div className="currency-input">
                <small>They Receive</small>
                <input type="number" placeholder="3,900" />
              </div>
              <p className="ant-dropdown-trigger currency-dropdown">
                <img src={brazilFlag} className="flag" alt="flag" />
                BRL
                <span className="material-icons">
                  <AiFillCaretDown className="text-gray-600" />
                </span>
              </p>
            </label>
            <div className="notice ">
              <p>This page is refreshed every 60 seconds</p>
            </div>
            <div className="form__submit">
              <button className="form__submit__button">Send this Amount</button>
            </div>
          </form>
        </div>
        <div className="transfer-info">
          <p>
            Expected start date: <span>July 8th 2020</span>
            <span className="material-icons">
              <ExclamationCircleTwoTone />
            </span>
          </p>
          <p>
            Expected completion date: <span>July 10th 2020</span>
            <span className="material-icons">
              <ExclamationCircleTwoTone />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransferCalculator;
