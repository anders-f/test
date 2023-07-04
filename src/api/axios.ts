import axios from "axios";

export default axios.create({
  baseURL: "https://643fcad1b9e6d064befec981.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  },
});
