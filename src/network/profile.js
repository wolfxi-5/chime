import {
  Get,
  Post,
  Put,
  Patch,
  Delete
} from "./request";

export default {
  //(url,data)
  test: (params) => {
    return Get("/posts", params)
  },
  getTest: (params) => {
    return Get("/posts", params)
  },
}