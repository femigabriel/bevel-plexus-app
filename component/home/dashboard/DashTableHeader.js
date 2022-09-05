import DashTable from "./DashTable";

function DashTableHeader() {
  return (
    <div className="container">
      <div className="table-title flex">
        <h2>Recent Transaction</h2>
        <a href="/">View All</a>
        {/* <NuxtLink to="/transactions">View All</NuxtLink> */}
      </div>
      <DashTable />
    </div>
  );
}

export default DashTableHeader;
