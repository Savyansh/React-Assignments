import React, { useState } from "react";
import "./Emp.css";

export default function Emp() {
  let employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" }
  ];
  const [searchField, setSearchField] = useState("");

  return (
    <div className="emp">
      <div>
        <input
          type={"text"}
          placeholder="Search"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {console.log(employees)}
          {employees
            .filter((emp) => {
              if (!searchField) {
                return emp;
              } else if (
                emp.name.toLowerCase().includes(searchField.toLowerCase())
              ) {
                return emp;
              }
            })
            .map((employee, i) => {
              return (
                <tr key={i}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
