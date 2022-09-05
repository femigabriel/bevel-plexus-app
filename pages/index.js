import Header from "../component/home/leftbar/Header";
import Dashboards from "../component/home/dashboard/Dashboards";
import DashTransactions from "../component/home/dashboard/DashTransactions";
import DashTableHeader from "../component/home/dashboard/DashTable";
import RightSidebar from "../component/home/rightsidebar/RightSidebar";

function App() {
  return (
    <div className="flex w-full">
      <div className="">
        <Header />
      </div>

      <div className="pl-10 pr-0 pt-32 w-full max-w-5xl h-screen overflow-y-auto ">
        <Dashboards />
        <DashTransactions />
        <DashTableHeader />
        <div className=""></div>
      </div>
      <RightSidebar className="rightSide" />
    </div>
  );
}

export default App;
