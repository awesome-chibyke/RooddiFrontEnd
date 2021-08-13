import axios from "axios";

export const getRequest = (url, header = {}) => {
  return new Promise(function (resolve, reject) {

    if(Object.keys(header).length === 0){

      axios.get(url)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });

    }else{

      //console.log(header)
      axios.get(url, header)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });

    }


  });
};

export const postRequest = (url, data, header = {}) => {
  return new Promise(function (resolve, reject) {
    
    if(Object.keys(header).length === 0){
      axios.post(url, data, header)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
    }else{
      axios.post(url, data, header)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
    }
  });
};

export const putRequest = (url, data, header = {}) => {
  return new Promise(function (resolve, reject) {
    
    if(Object.keys(header).length === 0){
      axios.put(url, data, header)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
    }else{
      axios.put(url, data, header)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
    }
  });
};
