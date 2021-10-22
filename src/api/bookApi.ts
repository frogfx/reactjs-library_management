import { IdBadge } from "@styled-icons/fa-solid";
import axiosClient from "./axiosClient";
import { BookModel } from "../interface/index";
const bookApi = {
   getAll: () => {
      const url = `/book/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/book/${id}`;
      return axiosClient.get(url);
   },
   add: (params: BookModel) => {
      const url = `/book/`;
      return axiosClient.post(url, params);
   },
};
export default bookApi;
