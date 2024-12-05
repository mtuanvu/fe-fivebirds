import axios from "axios";

const userApi = axios.create({
  baseURL: "https://fivebirds-f9g8a3bzfxdfhkcc.japaneast-01.azurewebsites.net/api/v1/users/",
  withCredentials: true,
});

export default userApi;
