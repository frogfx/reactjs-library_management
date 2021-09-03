import axiosClient from "./axiosClient";
import { Fine } from "../interface/index";
const fineApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "F000001",
                  reader: { key: "1", value: "Nguyễn Văn A" },
                  debt: 50000,
                  payment: 30000,
                  remaining: 20000,
                  createBy: "Nguyễn Văn B",
               },
               {
                  id: "F000002",
                  reader: { key: "3", value: "Nguyễn Văn C" },
                  debt: 40000,
                  payment: 30000,
                  remaining: 10000,
                  createBy: "Nguyễn Văn B",
               },
            ]);
         }, 1000);
      });
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
