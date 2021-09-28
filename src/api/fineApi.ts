import axiosClient from "./axiosClient";
import { Fine } from "../interface/index";
const fineApi = {
   getAll: () => {
      const url = `/fine/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "F000001",
               reader: { key: "1", value: "Nguyễn Văn A" },
               debt: 50000,
               payment: 30000,
               remaining: 20000,
               createBy: "Nguyễn Văn B",
            });
         }, 1000);
      });
   },
};
export default fineApi;
