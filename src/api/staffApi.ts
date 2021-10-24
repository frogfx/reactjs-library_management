import { StaffModel } from "../interface";
import axiosClient from "./axiosClient";

const staffApi = {
   getAll: () => {
      const url = `/staff/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/staff/${id}`;
      return axiosClient.get(url);
   },
   add: (params: StaffModel) => {
      const url = `/staff/`;
      return axiosClient.post(url, params);
   },
   update: (params: StaffModel) => {
      const url = `/staff/${params.id}`;
      return axiosClient.patch(url, params);
   },
   delete: (id: string) => {
      const url = `/staff/${id}`;
      return axiosClient.delete(url);
   },
};
export default staffApi;
