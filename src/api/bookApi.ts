import { IdBadge } from "@styled-icons/fa-solid";
import axiosClient from "./axiosClient";
const bookApi = {
   getAll: () => {
      const url = `/book/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/book/${id}`;
      return axiosClient.get(url);
   },
};
export default bookApi;
