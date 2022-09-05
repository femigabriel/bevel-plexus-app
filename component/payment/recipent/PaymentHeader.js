import React from "react";
const avatarSmall = "/images/avatarSmall.svg";
import { BsBell } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { Badge } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

function PaymentHeader() {
  return (
    <div className="trans-history">
      <div className="flex justify-between">
        <div className="left"></div>
        <div className="right">
          <div className="notifications">
            <div className="icon">
              <i className="las la-bell"></i>
            </div>
            <span></span>
          </div>
          {/* <!-- not ends here --> */}
          <button type="button" className="flex">
            <img src={avatarSmall} className="pr-1" alt="avatar" />
            <div className="flex m-2">
              <span className="text-base pr-2">Femi Gabriel</span>
              <span className="right-icon">
                <AiFillCaretDown />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentHeader;
