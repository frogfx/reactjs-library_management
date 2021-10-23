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
   update: (params: BookModel) => {
      const url = `/book/${params.id}`;
      return axiosClient.patch(url, params);
   },
   delete: (id: string) => {
      const url = `/book/${id}`;
      return axiosClient.delete(url);
   },
};
export default bookApi;
