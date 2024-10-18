import { useEffect, useState } from "react";
import { EmployeeDetails } from "../Home/styles.ts";
import axios from "axios";
import { MyModal } from "../Home/Modal/Modal.tsx";

const EmployeeDisplayPurejs = () => {
  const [isOpen, setIsOpen] = useState(false);
  function details({ avatar, name, email }) {
    return `
      <div><img src="${avatar}" alt="Avatar" width=200 height=300/></div>
    <div>Name: ${name}</div>
    <div>Email: ${email}</div>
    `;
  }

  async function getEmployeeDetails() {
    try {
      const loadingIndicator = document.getElementById("loading");
      loadingIndicator.style.display = "block";
      loadingIndicator.style.justifyContent = "start";
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/users?limit=10"
      );
      if (response.status === 200) {
        loadingIndicator.style.display = "none";
      }
      const data = response.data;
      const listofNames = document.getElementById("list_of_names");
      if (response.status === 200) {
        listofNames.style.justifyContent = "start";
      }
      data.map((item) => {
        const employeeNameDiv = document.createElement("div");
        employeeNameDiv.textContent = item.name;
        employeeNameDiv.className = "employee_name";
        employeeNameDiv.id = item.id;
        employeeNameDiv.style.cursor = "pointer";
        employeeNameDiv.style.padding = "10px";
        employeeNameDiv.style.borderBottom = "1px solid #ccc";
        employeeNameDiv.style.width = "100%";
        if (listofNames) {
          listofNames.appendChild(employeeNameDiv);
        }
        employeeNameDiv.addEventListener("click", () => {
          const employeeDetails = document.getElementById(
            "employee_details_data"
          );
          employeeDetails.style.display = "flex";
          employeeDetails.style.flexDirection = "column";
          employeeDetails.style.alignItems = "center";
          employeeDetails.style.flex = "1";

          const itemList = {
            avatar: item.avatar,
            name: item.name,
            email: item.email,
          };

          employeeDetails.innerHTML = details(itemList);
        });
      });
    } catch (error) {
      const listofNames = document.getElementById("list_of_names");
      listofNames.style.padding = "10px";
      listofNames.style.display = "flex";
      listofNames.style.justifyContent = "center";
      listofNames.style.alignItems = "center";
      listofNames.textContent = `something went wrong ${error}`;
    }
  }

  function addEmployee(e) {
    const form = document.getElementById("form-element");
    const formData = new FormData(form);
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
    }
  }

  useEffect(() => {
    getEmployeeDetails();
  }, []);

 
  return (
    <EmployeeDetails className="w-full">
      <div className="header">
        <h1>Employee Info</h1>
        <button className="border p-2" onClick={() => setIsOpen(true)}>
          Add Employee
        </button>
        <MyModal isOpen={isOpen} isCloseModal={() => setIsOpen(false)}>
          <form
            id="form-element"
            onSubmit={(e) => {
              e.preventDefault();
              addEmployee();
            }}
          >
            <div>
              <label>Avatar:</label>
              <input type="text" placeholder="add avatar link.." />
            </div>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter Email" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </MyModal>
      </div>
      <div className="body">
        <div className="employee_name_header">
          <h1>Employee Name List</h1>
          <div id="list_of_names">
            <div id="loading" style={{ display: "none" }}>
              Loading...
            </div>
          </div>
        </div>
        <div className="employee_details_header">
          <h1>Employee Details</h1>
          <div id="employee_details_data"></div>
        </div>
      </div>
    </EmployeeDetails>
  );
};

export default EmployeeDisplayPurejs;
