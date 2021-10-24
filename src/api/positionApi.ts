import axiosClient from "./axiosClient";
const positionApi = {
   getAll: () => {
      const url = `/staff-position/`;
      return axiosClient.get(url);
   },
   get: (id: string) => {
      const url = `/staff-position/${id}`;
      return axiosClient.get(url);
   },
};
export default positionApi;
