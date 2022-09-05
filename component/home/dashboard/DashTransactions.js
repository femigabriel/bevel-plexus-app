const transaction = "/images/transaction.svg";
const wallet = "/images/wallet.svg";
function DashTransactions() {
  return (
    <div className="flex w-full max-w-6xl	 ">
      <div className="flex pt-9 pb-10 pl-10  bg-white rounded-md h-44 mr-10 mt-10 w-full max-w-md	">
        <div className="pr-10">
          <img src={transaction} className="bg-sky-200 p-5 rounded-md	" alt="" />
        </div>
        <div>
          <p className="text-gray-400 text-lg uppercase 	">available credit</p>
          <h4 className="text-sky-400	 text-lg	uppercase ">13,750.00 NGL</h4>
        </div>
      </div>
      <div className="flex  pt-9 pb-10 pl-10  bg-white rounded h-44 mr-10 mt-10 w-full max-w-lg">
        <div className="pr-10">
          <img src={wallet} className="bg-sky-200	p-5 rounded" alt="" />;
        </div>
        <div className="credit-balance">
          <p className="text-gray-400 text-lg uppercase 	">total transaction</p>
          <h4 className="text-sky-400	 text-lg	uppercase ">13,750.00 NGL</h4>
        </div>
      </div>
    </div>
  );
}

export default DashTransactions;
