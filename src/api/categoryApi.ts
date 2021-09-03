import axiosClient from "./axiosClient";
const categoryApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "C000001",
                  name: "Công nghệ phần mềm",
               },
               {
                  id: "C000002",
                  name: "Khoa học máy tính",
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
               name: "Công nghệ phần mềm",
            });
         }, 1000);
      });
   },
};
export default categoryApi;
