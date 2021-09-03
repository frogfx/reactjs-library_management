import axiosClient from "./axiosClient";
import { Staff } from "../interface/index";
const staffApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "S000001",
                  name: "Nguyễn Văn A",
                  address: "227 Nguyễn Văn Cừ, Quận 5",
                  birthDay: "20/05/1999",
                  phone: "0123456789",
                  degree: "College",
                  position: { key: "employee", value: "Employee" },
                  part: { key: "librarian", value: "Librarian" },
               },
               {
                  id: "S000002",
                  name: "Nguyễn Văn B",
                  address: "Lâm Văn Bềnh, Quận 7",
                  birthDay: "20/05/1999",
                  phone: "0123456789",
                  degree: "College",
                  position: { key: "employee", value: "Employee" },
                  part: { key: "librarian", value: "Librarian" },
               },
            ]);
         }, 1000);
      });
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "C000001",
               name: "Nguyễn Văn A",
               address: "227 Nguyễn Văn Cừ, Quận 5",
               birthDay: "20/05/1999",
               phone: "0123456789",
               degree: { key: "college", value: "College" },
               position: { key: "employee", value: "Employee" },
               part: { key: "librarian", value: "Librarian" },
            });
         }, 1000);
      });
   },
};
export default staffApi;
