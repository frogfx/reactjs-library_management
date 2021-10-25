import axiosClient from "./axiosClient";
import { Fine } from "../interface/index";
const fineReceiptApi = {
   getAll: () => {
      const url = `/fine/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/fine/${id}`;
      return axiosClient.get(url);
   },
   getByReader: (readerId: string) => {
      const url = `/fine/reader/${readerId}`;
      return axiosClient.get(url);
   },
   // add: (params: StaffModel) => {
   //    const url = `/staff/`;
   //    return axiosClient.post(url, params);
   // },
   // update: (params: StaffModel) => {
   //    const url = `/staff/${params.id}`;
   //    return axiosClient.patch(url, params);
   // },
   // delete: (id: string) => {
   //    const url = `/staff/${id}`;
   //    return axiosClient.delete(url);
   // },
};
export default fineReceiptApi;
