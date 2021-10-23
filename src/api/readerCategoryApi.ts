import axiosClient from "./axiosClient";
const readerCategoryApi = {
   getAll: () => {
      const url = `/reader-category/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/reader-category/${id}`;
      return axiosClient.get(url);
   },
};
export default readerCategoryApi;
