import { BsBell } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
const avatarSmall = "/images/avatarSmall.svg";
import CurrencyCalculator from "./CurrencyCalculator";
import CurrencyUser from "./CurrencyUser";
import { Badge } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="flex justify-between">
        <div></div>

        <div className="flex text-white">
          <div>
            <Badge dot>
              {/* <NotificationOutlined
                style={{
                  fontSize: 16,
                }}
              /> */}
              <BsBell className="text-2xl mr-5 mt-1" />
            </Badge>
          </div>
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
      <CurrencyCalculator />
      <CurrencyUser />
    </div>
  );
}

export default RightSidebar;
