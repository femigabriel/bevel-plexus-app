const avatarSmall = "/images/avatarSmall.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
function DashTable() {
  return (
    <div className="pt-10">
      <div className="container con-tab">
        <table>
          <thead>
            <tr>
              <td>RECIPENT</td>
              <td>TRANSACTION</td>
              <td>DATE</td>
              <td>STATUS</td>
            </tr>
          </thead>

          <tbody>
            <tr className="collapsed">
              <td>
                <div>
                  <img
                    src={avatarSmall}
                    className="avatar-small"
                    alt="avatar"
                  />
                  <p>Zinedine Zidane </p>
                </div>
              </td>
              <td>
                <div>
                  <span> 1000 CAD </span>
                  <span className="material-icons">
                    <AiFillCaretRight />
                  </span>
                  <span> 3900 BRL </span>
                </div>
              </td>
              <td>
                <div>
                  <span> 2/4/2020 </span>
                </div>
              </td>
              <td>
                <div>
                  <span className="badge success">COMPLETED </span>
                  <button className="toggle">
                    <span className="material-icons">
                      <AiFillCaretDown />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="collapsed">
              <td>
                <div>
                  <img
                    src={avatarSmall}
                    className="avatar-small"
                    alt="avatar"
                  />
                  <p>Luka Modric</p>
                </div>
              </td>
              <td>
                <div>
                  <span> 1000 CAD </span>
                  <span className="material-icons">
                    <AiFillCaretRight />
                  </span>
                  <span> 3900 BRL </span>
                </div>
              </td>
              <td>
                <div>
                  <span> 2/4/2020 </span>
                </div>
              </td>
              <td>
                <div>
                  <span className="badge success">COMPLETED </span>
                  <button className="toggle">
                    <span className="material-icons">
                      <AiFillCaretDown />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="collapsed">
              <td>
                <div>
                  <img
                    src={avatarSmall}
                    className="avatar-small"
                    alt="avatar"
                  />
                  <p>Toni Kross</p>
                </div>
              </td>
              <td>
                <div>
                  <span> 1000 CAD </span>
                  <span className="material-icons">
                    <AiFillCaretRight />
                  </span>
                  <span> 3900 BRL </span>
                </div>
              </td>
              <td>
                <div>
                  <span> 2/4/2020 </span>
                </div>
              </td>
              <td>
                <div>
                  <span className="badge success">COMPLETED </span>
                  <button className="toggle">
                    <span className="material-icons">
                      <AiFillCaretDown />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="collapsed">
              <td>
                <div>
                  <img
                    src={avatarSmall}
                    className="avatar-small"
                    alt="avatar"
                  />
                  <p>Ed Camavinga</p>
                </div>
              </td>
              <td>
                <div>
                  <span> 1000 CAD </span>
                  <span className="material-icons">
                    <AiFillCaretRight />
                  </span>
                  <span> 3900 BRL </span>
                </div>
              </td>
              <td>
                <div>
                  <span> 2/4/2020 </span>
                </div>
              </td>
              <td>
                <div>
                  <span className="badge warning">PENDING </span>
                  <button className="toggle">
                    <span className="material-icons">
                      <AiFillCaretDown />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashTable;
