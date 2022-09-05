import React from "react";
const brazilFlag = "/images/brazilFlag.svg";
const canadaFlag = "/images/canadaFlag.svg";
const avatarSmall = "/images/avatarSmall.svg";
const avatarSquare = "/images/avatarSquare.png";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";

function Transactions() {
  return (
    <div className="table-container">
      <div className="table-container">
        <div id="transaction-table">
          <table className="mod-width">
            {/* <colgroup>
              <col style="width: 30%" />
              <col style="width: 20%" />
              <col style="width: 30%" />
              <col style="width: 20%" />
            </colgroup> */}
            <tbody className="table-alt">
              <tr className="collapsed">
                <td>
                  <div>
                    <div className=" pr-5 relative top-5 pb-1 flex flex-col ">
                      <img src={avatarSquare} className="avatar" alt="avatar" />
                      <img
                        src={brazilFlag}
                        className="w-7 ml-4 mb-2 relative bottom-5 right-2 "
                        alt="flag"
                      />
                    </div>
                    <p>
                      Luka Modric<small> phillipmango@gmail.com </small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      Jun 6th 2020<small>Last transaction date</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span class="flex  text-base	">
                        <span className="text-black"> 1000 CAD </span>
                        <CaretRightOutlined className="" />
                        <span className="pl-2"> 3900 BRL </span>
                      </span>
                      <small>Last transaction amount</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <span class="badge success">COMPLETED </span>
                    <button class="toggle">
                      <span class="material-icons">
                        <CaretDownOutlined />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="collapsed">
                <td>
                  <div>
                    <div className="pr-5 relative top-5 pb-1 flex flex-col ">
                      <img src={avatarSquare} className="avatar" alt="avatar" />
                      <img
                        src={canadaFlag}
                        className="w-7 ml-4 mb-2 relative bottom-5 right-2 "
                        alt="flag"
                      />
                    </div>
                    <p>
                      Toni Kross<small> phillipmango@gmail.com </small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      Jun 1st 2020<small>Last transaction date</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span class="flex text-black text-base	">
                        <span className=""> 1000 CAD </span>
                        <CaretRightOutlined className="" />
                        <span className="pl-2"> 3900 BRL </span>
                      </span>
                      <small>Last transaction amount</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <span class="badge success">COMPLETED </span>
                    <button class="toggle">
                      <span class="material-icons">
                        <CaretDownOutlined />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="collapsed">
                <td>
                  <div>
                    <div className="pr-5 relative top-5 pb-1 flex flex-col">
                      <img src={avatarSquare} className="avatar" alt="avatar" />
                      <img
                        src={brazilFlag}
                        className="w-7 ml-4 mb-2 relative bottom-5 right-2 "
                        alt="flag"
                      />
                    </div>
                    <p>
                      Erin Casemiro<small> ericculhane@gmail.com </small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      May 17th 2020<small>Last transaction date</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span class="flex text-black text-base	">
                        <span className=""> 1000 CAD </span>
                        <CaretRightOutlined className="" />
                        <span className="pl-2"> 3900 BRL </span>
                      </span>
                      <small>Last transaction amount</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <span class="badge warning">PENDING </span>
                    <button class="toggle">
                      <span class="material-icons">
                        <CaretDownOutlined />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="collapsed">
                <td>
                  <div>
                    <div className="pr-5 relative top-5 pb-1 flex flex-col">
                      <img src={avatarSquare} className="avatar" alt="avatar" />
                      <img
                        src={canadaFlag}
                        className="w-7 ml-4 mb-2 relative bottom-5 right-2 "
                        alt="flag"
                      />
                    </div>
                    <p>
                      Karim Benzema<small> ericculhane@gmail.com </small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      May 17th 2020<small>Last transaction date</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span class="flex text-black text-base	">
                        <span className=""> 1000 CAD </span>
                        <CaretRightOutlined className="" />
                        <span className="pl-2"> 3900 BRL </span>
                      </span>
                      <small>Last transaction amount</small>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <span class="badge danger">CANCELLED </span>
                    <button class="toggle">
                      <span class="material-icons">
                        <CaretDownOutlined />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
