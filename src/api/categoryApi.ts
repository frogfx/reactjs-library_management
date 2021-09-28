import axiosClient from "./axiosClient";
import { Category } from "../interface/index";
const categoryApi = {
   getAll: () => {
      const url = `/category/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/category/${id}`;
      return axiosClient.get(url);
   },
   add: (params: Category) => {
      const url = `/category/`;
      return axiosClient.post(url, params);
   },
   delete: (id: string) => {
      const url = `/category/${id}`;
      return axiosClient.delete(url);
   },
};
export default categoryApi;
