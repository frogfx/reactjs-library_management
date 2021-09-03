import axiosClient from "./axiosClient";
import { Borrow } from "../interface/index";
const borrowApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "BR000001",
                  readers: { key: "1", value: "Nguyễn Văn A" },
                  borrowDate: "07/30/2021",
                  status: "Paid",
                  books: [
                     {
                        id: "B000001",
                        name: "Nhập môn lập trình",
                        category: { key: "1", value: "Công nghệ phần mềm" },
                        author: "KHTN University",
                     },
                     {
                        id: "B000002",
                        name: "Ẩn dữ liệu và chia sẻ thông tin",
                        category: { key: "2", value: "Khoa học máy tính" },
                        author: "KHTN University",
                     },
                  ],
               },
               {
                  id: "BR000002",
                  readers: { key: "2", value: "Nguyễn Văn B" },
                  borrowDate: "08/15/2021",
                  status: "UnPaid",
                  books: [
                     {
                        id: "B000002",
                        name: "Ẩn dữ liệu và chia sẻ thông tin",
                        category: { key: "2", value: "Khoa học máy tính" },
                        author: "KHTN University",
                     },
                     {
                        id: "B000003",
                        name: "Nhập môn công nghệ phần mềm",
                        category: { key: "1", value: "Công nghệ phần mềm" },
                        author: "KHTN University",
                     },
                  ],
               },
            ]);
         }, 1000);
      });
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "BR000001",
               readers: { key: "1", value: "Nguyễn Văn A" },
               borrowDate: "07/30/2021",
               books: [
                  {
                     id: "B000001",
                     name: "Nhập môn lập trình",
                     category: { key: "1", value: "Công nghệ phần mềm" },
                     author: "KHTN University",
                  },
                  {
                     id: "B000002",
                     name: "Ẩn dữ liệu và chia sẻ thông tin",
                     category: { key: "2", value: "Khoa học máy tính" },
                     author: "KHTN University",
                  },
               ],
            });
         }, 1000);
      });
   },
};
export default borrowApi;
