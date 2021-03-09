import axios from "axios";

// checks to see if a token is passed in:
// if so, set to global header.
// if not, delete from global header

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
