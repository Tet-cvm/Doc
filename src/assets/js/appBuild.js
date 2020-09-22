import { axiosFetch } from "./appUtils.js"

export function initialize() {
  axiosFetch({
    method: "GET",
    url: "",
    load: "请求中..",
    params: {}
  })
  .then((res) => {
    console.log(res, "@@ http://127.0.0.1:5000/");
  })
  .catch(() => {
  })
}