import React from "react";
const avatarSquare = "/images/avatarSquare.png";
const brazilFlag = "/images/brazilFlag.svg";
import { FcPhoneAndroid } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";

function PaymentProfile() {
  return (
    <div className="pt-5">
      <div className="section-title">
        <p>Profile Recipent</p>
      </div>

      <div className="bg-white max-w-2xl p-5 pr-10 pl-10 rounded-md">
        <div className="flex justify-between">
          <div></div>
          <div className="action">
            <a href="/">Edit</a>
          </div>
        </div>

        <div className="user-info">
          {/* <div className="team-a flex">
            <div className="payment-user-avatar">
              <div className="user-avatar">
                <img src={avatarSquare} className="avatar" alt="avatar" />
                <img src={brazilFlag} className="flag" alt="flag" />
              </div>
            </div>

            <div className="payment-user-name">
              <h3>Femi Gabriel</h3>
              <p>timfemi@gmail.com</p>
            </div>
          </div> */}
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
              <h3 className="text-lg	 font-semibold">Femi Gabriel</h3>
              <p className="text-gray-400	 text-sm">timfemi@gmail.com</p>
            </div>
          </div>
          <div className="pb-5">
            <h3 className="flex text-lg	font-semibold ">
              <FcPhoneAndroid className="text-3xl	 mr-3 mt-0" />
              <span>+1 610 435 6354</span>
            </h3>
          </div>
          <div className="flex">
            <h3 className="flex text-lg	font-semibold">
              <BiWorld className=" text-3xl	 mr-3 mt-0" />
              <span>Canada</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentProfile;
