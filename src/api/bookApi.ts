import axiosClient from "./axiosClient";
import { Book } from "../interface/index";
const bookApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "B000001",
                  name: "Nhập môn công nghệ phần mềm",
                  category: { key: "1", value: "Công nghệ phần mềm" },
                  author: "KHTN University",
                  publisYear: { key: "1", value: "2020" },
                  publisher: "Bộ giáo dục và đào tạo",
                  addDate: "07/30/2021",
                  reciever: "Nguyễn Văn A",
                  price: 30000,
               },
               {
                  id: "B000002",
                  name: "Xử lý ảnh số",
                  category: { key: "2", value: "Khoa học máy tính" },
                  author: "KHTN University",
                  publisYear: { key: "2", value: "2021" },
                  publisher: "Bộ giáo dục và đào tạo",
                  addDate: "07/30/2021",
                  reciever: "Nguyễn Văn A",
                  price: 30000,
               },
            ]);
         }, 1000);
      });
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "B000001",
               name: "Nhập môn công nghệ phần mềm",
               category: { key: "1", value: "Công nghệ phần mềm" },
               author: "KHTN University",
               publisYear: { key: "1", value: "2020" },
               publisher: "Bộ giáo dục và đào tạo",
               addDate: "07/30/2021",
               reciever: "Nguyễn Văn A",
               price: 30000,
            });
         }, 1000);
      });
   },
};
export default bookApi;
