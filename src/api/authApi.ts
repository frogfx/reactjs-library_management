import axiosClient from "./axiosClient";
import { Auth } from "../interface/index";

interface Password {
   currentPassword: string;
   newPassword: string;
}

interface Image {
   avatar: File;
}
const authApi = {
   logIn: (params: Auth) => {
      const url = `/auth/`;
      return axiosClient.post(url, params);
   },
   getMe: () => {
      const url = `/auth/`;
      return axiosClient.get(url);
   },
   changePassword: (params: Password) => {
      const url = `/auth/password`;
      return axiosClient.patch(url, params);
   },
   changeImage: (image: File) => {
      const formData = new FormData();
      formData.append("avatar", image);
      const url = `/auth/image`;
      return axiosClient.patch(url, formData);
   },
};
export default authApi;
