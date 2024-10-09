import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Robb</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">23984298</td>
            <td className="wd-section">S131</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">13:23:32</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Aegon</span>{" "}
              <span className="wd-last-name">Targaryen</span></td>
            <td className="wd-login-id">99734214</td>
            <td className="wd-section">S153</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-12-01</td>
            <td className="wd-total-activity">5:11:32</td> </tr>
            

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jaime</span>{" "}
              <span className="wd-last-name">Lannister</span></td>
            <td className="wd-login-id">108347452</td>
            <td className="wd-section">S601</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-04-01</td>
            <td className="wd-total-activity">32:21:32</td> </tr>

        </tbody>
      </table>
    </div> );}