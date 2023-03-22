import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc21cb064d074faaa2133c98dbe58b5c",
  },
});
