import axios from "axios";
import { BASE_URL, apiUrlEndPoints } from "./api.constant";
const API_HEADER = {
  Accept: "application/json",
};

const fetchGetApi = (endPoint: string) =>
  new Promise(async (resolve, reject) => {
    const url = BASE_URL + endPoint;
    axios
      .get(url, {
        headers: API_HEADER,
      })
      .then((res) => {
        res && resolve(res.data);
      })
      .catch((error) => {
        // handle error
        reject(error);
        console.log(error);
      });
  });

export const apiHelper = {
  fetchGetApi,
  apiUrlEndPoints,
};

/*export const fetchPostApi = (parma: any) =>
  new Promise(async (resolve, reject) => {
    const url = BASE_URL + ApiUrlEndPoints.allBanners;
    axios
      .post(url, parma)
      .then((res) => {
        res && resolve(res.data);
      })
      .catch((error) => {
        // handle error
        reject(error);
        console.log(error);
      });
  });*/
