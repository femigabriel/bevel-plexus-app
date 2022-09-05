import React from "react";

function ETransfer() {
  return (
    <div class="e-transfer pt-10">
      <div class="box-container">
        <div class="shadow-box">
          <div class="action">
            <a href="/payment/review">Edit</a>
          </div>
          <div class="box__title">
            <h3>E-Transfer</h3>
          </div>
          <div id="payment-summary-card">
            <p>
              <span>Bank:</span>
              <span>Access (Diamond Bank)</span>
            </p>
            <p>
              <span>Account Name:</span>
              <span>Bevel Plexus Texnologies</span>
            </p>
            <p>
              <span>Account Number:</span>
              <span class="greentext">0110214749</span>
            </p>
            <p>
              <span>Deposit Reference:</span>
              <span>CodeQDX6MN3VSQL</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ETransfer;
