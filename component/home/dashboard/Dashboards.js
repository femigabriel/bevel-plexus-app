const avatarSquare = "/images/avatarSquare.png";
const brazilFlag = "/images/brazilFlag.svg";
import { BiRightArrow } from "react-icons/bi";

const Dashboards = () => {
  return (
    <div className="pr-2 pt-15 w-full	max-w-5xl	">
      <div className="pb-5 text-#879dad text-sm opacity-50	  ">
        <h1>DASHBOARD</h1>
      </div>
      <div className="bg-white rounded w-full p-10  drop-shadow-md  flex flex-col max-w-7xl">
        <div className="pb-10">
          <h2>Send Again</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="pr-5 flex flex-col ">
              <img src={avatarSquare} className="" alt="avatar" />
              <img
                src={brazilFlag}
                className="w-7 ml-4 mb-2 relative bottom-5 left-1 "
                alt="flag"
              />
            </div>
            <div className="">
              <h3 className="text-base font-semibold">Femi Gabriel</h3>
              <p className="text-gray-400	 text-sm">timfemi@gmail.com</p>
            </div>
          </div>
          {/* user details ends here */}
          <div className="">
            <h3 className="flex mr-12">
              <span className="text-base font-semibold">100 CAD</span>
              <BiRightArrow className="ml-3 mr-2" />
              <span className="text-base font-semibold">100 CAD</span>
            </h3>
            <p className="text-gray-400	 text-sm">Last Transaction</p>
          </div>
          <div className="btn">
            <button className="bg-blue-600 rounded text-white	pt-3 pb-3 pl-10 pr-10">
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
