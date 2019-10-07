import axios from "axios";

const URL = "https://official-joke-api.appspot.com/";

export const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getJoke = () => {
  return instance.get("jokes/random").then(r => r.data);
};
