"use client";

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th>
            <th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>

          {/* Add at least 3 more people */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Clark</span>{" "}
              <span className="wd-last-name">Kent</span>
            </td>
            <td>001234565C</td><td>S104</td><td>STUDENT</td>
            <td>2021-01-15</td><td>09:21:10</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Diana</span>{" "}
              <span className="wd-last-name">Prince</span>
            </td>
            <td>001234566D</td><td>S105</td><td>TA</td>
            <td>2021-02-20</td><td>11:45:33</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Barry</span>{" "}
              <span className="wd-last-name">Allen</span>
            </td>
            <td>001234567B</td><td>S106</td><td>FACULTY</td>
            <td>2021-03-10</td><td>14:12:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Arthur</span>{" "}
              <span className="wd-last-name">Curry</span>
            </td>
            <td>001234568A</td><td>S107</td><td>STUDENT</td>
            <td>2021-04-05</td><td>16:30:42</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}