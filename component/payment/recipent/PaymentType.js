import { BsChevronDown } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

function RecipentPage() {
  return (
    <div className="w-full max-w-4xl">
      <div className="page-title">
        <h1>Select Recipent</h1>
      </div>
      <div className="main-title">
        <p>Choose the transaction type</p>
      </div>
      <div className="flex w-full max-w-3xl pb-10	">
        <div className="flex border-2 p-5  rounded-md border-sky-300	mr-10 w-full max-w-md content-box">
          <img src="../../../images/recipent.svg" className="pl-2" alt="" />
          <p className="font-semibold text-xl	text-slate-400 pl-5 pt-5 ">
            To Individual
          </p>
        </div>
        <div className="flex border-0 p-5  rounded-md bg-white shadow-sm	mr-10 w-full max-w-md ">
          <img src="../../../images/school.svg" className="pl-2" alt="" />
          <p className="font-semibold text-xl	text-slate-400 pl-5 pt-5  ">
            Tuiton Payment
          </p>
        </div>
      </div>
      <div className="main-title">
        <p>Choose the transaction type</p>
      </div>
      <div className="max-w-3xl flex justify-between pb-10 border-b-2">
        <div className="bg-white shadow-md rounded-md max-w-md w-full flex justify-between p-5 pl-10 pr-10 ">
          <FaRegAddressBook className="mt-2 text-sky-400" />
          <input type="text" placeholder="Select recipent" />
          <BsChevronDown className="mt-2" />
        </div>
        <div className="flex mr-5">
          <div>
            <p className="text-sky-400 mr-5">
              Add new <br />
              recipent
            </p>
          </div>
          <span className="material-icons">
            <MdOutlineErrorOutline className="m-5 text-sky-400 " />
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipentPage;
