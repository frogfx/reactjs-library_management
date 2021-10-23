import axiosClient from "./axiosClient";
import { Readers, ReadersModel } from "../interface/index";
const readersApi = {
   getAll: () => {
      const url = `/reader/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/reader/${id}`;
      return axiosClient.get(url);
   },
   add: (params: ReadersModel) => {
      const url = `/reader/`;
      return axiosClient.post(url, params);
   },
   update: (params: ReadersModel) => {
      const url = `/reader/${params.id}`;
      return axiosClient.patch(url, params);
   },
   delete: (id: string) => {
      const url = `/reader/${id}`;
      return axiosClient.delete(url);
   },
};
export default readersApi;
