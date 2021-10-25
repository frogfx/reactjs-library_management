import axiosClient from "./axiosClient";
import { FineReceiptModel } from "../interface/index";
const fineReceiptApi = {
   getAll: () => {
      const url = `/fine-receipt/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/fine-receipt/${id}`;
      return axiosClient.get(url);
   },
   add: (params: FineReceiptModel) => {
      const url = `/fine-receipt/`;
      return axiosClient.post(url, params);
   },
   delete: (id: string) => {
      const url = `/fine-receipt/${id}`;
      return axiosClient.delete(url);
   },
};
export default fineReceiptApi;
