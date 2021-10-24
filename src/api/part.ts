import axiosClient from "./axiosClient";
const partApi = {
   getAll: () => {
      const url = `/staff-part/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/staff-part/${id}`;
      return axiosClient.get(url);
   },
};
export default partApi;
