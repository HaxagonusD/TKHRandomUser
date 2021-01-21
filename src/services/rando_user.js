const axios = require("axios");
const baseURL = "https://randomuser.me/api/?results=100";

const fetchUser = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log(response); // just to test
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default fetchUser;
