import React from "react";


function PaymentMethods() {
  const todos = [
    {
      id: 1,
      type: "E-transfer",
      duration: "Transfer speed 1 hour",
      status: "free",
    },
    {
      id: 2,
      type: "Bank payment",
      duration: "Transfer speed 1 hour",
      status: "free",
    },
    {
      id: 3,
      type: "Debit card",
      duration: "Transfer speed 1 hour",
      status: "8.9 CAD",
    },
    {
      id: 3,
      type: "Credit card",
      duration: "Transfer speed 1 hour",
      status: "8.9 CAD",
    },
  ];
  return (
    <>
      <div className="page-title ">
        <h1>Payment</h1>
      </div>
      <div className="transfer-title">
        <p>Select the payment options</p>
      </div>

      {todos.map((todo, key) => (
        <div key={key} className="max-w-3xl w-full ">
          <div className="shadow-box max-w-xl">
            {/* payment type loop */}
            <div className="bg-white mb-5 flex p-6">
              {/* chckbox */}
              <div className="checkbox bg-white">
                <div className="checkbox-inner"></div>
              </div>
              {/* content */}
              <div className=" flex justify-between ">
                <p className="flex flex-col grow ">
                  <span className="font-medium	text-xl">{todo.type}</span>
                  <span className="">{todo.duration}</span>
                </p>

                <div className="">
                  <a className="green" href="/payment/options">
                    {todo.status}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PaymentMethods;
