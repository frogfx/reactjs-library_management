import axiosClient from "./axiosClient";

const staffApi = {
   getAll: () => {
      const url = `/staff/`;
      return axiosClient.get(url);
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
