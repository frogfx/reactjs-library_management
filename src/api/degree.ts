import axiosClient from "./axiosClient";
const degreeApi = {
   getAll: () => {
      const url = `/staff-degree/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/staff-degree/${id}`;
      return axiosClient.get(url);
   },
};
export default degreeApi;
