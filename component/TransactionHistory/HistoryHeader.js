import React from "react";
import { SearchOutlined } from "@ant-design/icons";

function HistoryHeader() {
  return (
    <div className="history">
      <div className="history-header">
        <div className="history-title">
          <h4>Transactions</h4>
        </div>
        <div className="history-content">
          <h2>Your Transactions (5)</h2>
          <form>
            <label>
              <SearchOutlined className="text-sky-400 text-base" />
              <input type="text" placeholder="Search" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HistoryHeader;
