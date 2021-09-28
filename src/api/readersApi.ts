import axiosClient from "./axiosClient";
import { Readers } from "../interface/index";
const readersApi = {
   getAll: () => {
      const url = `/reader/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "R000001",
               name: "Nguyễn Văn A",
               address: "227 Nguyễn Văn Cừ, Quận 5",
               birthDay: "20/05/1999",
               email: "email01@gmail.com",
               createBy: "Nguyễn Văn B",
               category: { key: "A", value: "A" },
            });
         }, 1000);
      });
   },
};
export default readersApi;
