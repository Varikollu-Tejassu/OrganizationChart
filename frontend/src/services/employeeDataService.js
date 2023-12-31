import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function employeeData() {
  let response = await axios.get(
    `${base_url}/api/userdata/getusers`
  );

  return response;
}

async function addEmployee(employeename,role,department,manager) {
  console.log("inser")
  let response = await axios.post(
    `${base_url}/api/userdata/addusers`,{employeename:employeename,role:role,department:department,manager:manager}
  );

  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { employeeData,addEmployee };