import axios from "axios";

export const getRequest = (url) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postRequest = (url, data) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
