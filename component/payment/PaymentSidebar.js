import React from "react";
import { CheckOutlined } from "@ant-design/icons";
const items = [
  {
    id: 0,
    name: "Select recipent",
    numb: 1,
  },
  {
    id: 1,
    name: "Transfer detail",
    numb: 2,
  },
  {
    id: 2,
    name: "Payment",
    numb: 3,
  },
  {
    id: 3,
    name: "Review",
    numb: 4,
  },
];
function PaymentSidebar({pageIndex}) {
 
  return (
    <div className="bg-blue-600 text-white drop-shadow-md h-screen pt-20 pl-10 pr-10 w-full max-w-sm">
      <div className="heading">
        <h4 className="text-white border-b border-white">Make Payment</h4>
      </div>
      <div className="payment-list">
        <ul className="pb-10">
          {items.map((list, key) => (
            <li key={key}>
              {list.id <= pageIndex ? (
                <span className="active">
                  <CheckOutlined className="bg-green-400 active" />
                </span>
              ) : (
                <span className="label">{list.numb}</span>
              )}

              <span>{list.name} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentSidebar;
