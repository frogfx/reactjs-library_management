import axiosClient from "./axiosClient";
import { BorrowModel } from "../interface/index";
const borrowApi = {
   getAll: () => {
      const url = `/borrow-receipt/`;
      return axiosClient.get(url);
   },
   getQuantityBook: (readerId: string) => {
      const url = `/borrow-receipt/${readerId}/quantity-book`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/borrow-receipt/${id}`;
      return axiosClient.get(url);
   },
   add: (params: BorrowModel) => {
      const url = `/borrow-receipt/`;
      return axiosClient.post(url, params);
   },
   update: (params: BorrowModel) => {
      const url = `/borrow-receipt/${params.id}`;
      return axiosClient.patch(url, params);
   },
   delete: (id: string) => {
      const url = `/borrow-receipt/${id}`;
      return axiosClient.delete(url);
   },
};
export default borrowApi;
