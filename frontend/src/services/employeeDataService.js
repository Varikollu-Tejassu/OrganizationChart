import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function employeeData() {
  let response = await axios.get(
    `${base_url}/api/userdata/getusers`
  );

  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { employeeData };