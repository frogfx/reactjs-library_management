import axiosClient from "./axiosClient";
import { Returns } from "../interface/index";
const returnsApi = {
   getAll: () => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs([
               {
                  id: "RR000001",
                  idBorrow: "BR000001",
                  readers: { key: "1", value: "Nguyễn Văn A" },
                  borrowDate: "07/30/2021",
                  returnsDate: "08/10/2021",
                  books: [
                     {
                        id: "B000001",
                        name: "Nhập môn lập trình",
                        category: { key: "1", value: "Công nghệ phần mềm" },
                        author: "KHTN University",
                        isLost: true,
                     },
                     {
                        id: "B000002",
                        name: "Ẩn dữ liệu và chia sẻ thông tin",
                        category: { key: "2", value: "Khoa học máy tính" },
                        author: "KHTN University",
                        isLost: false,
                     },
                  ],
                  fines: [
                     {
                        content: "Lost Book: Nhập môn công nghệ phần mềm",
                        value: 20000,
                     },
                     { content: "Late: 7 Day", value: 35000 },
                  ],
                  totalFine: 55000,
               },
               {
                  id: "RR000002",
                  idBorrow: "BR000002",
                  readers: { key: "1", value: "Nguyễn Văn B" },
                  borrowDate: "07/25/2021",
                  returnsDate: "08/05/2021",
                  books: [
                     {
                        id: "B000001",
                        name: "Nhập môn lập trình",
                        category: { key: "1", value: "Công nghệ phần mềm" },
                        author: "KHTN University",
                        isLost: false,
                     },
                     {
                        id: "B000002",
                        name: "Ẩn dữ liệu và chia sẻ thông tin",
                        category: { key: "2", value: "Khoa học máy tính" },
                        author: "KHTN University",
                        isLost: true,
                     },
                  ],
                  fines: [
                     {
                        content: "Lost Book: Ẩn dữ liệu và chia sẻ thông tin",
                        value: 20000,
                     },
                     { content: "Late: 5 Day", value: 25000 },
                  ],
                  totalFine: 45000,
               },
            ]);
         }, 1000);
      });
   },
   get: (id: string) => {
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               id: "RR000001",
               idBorrow: "BR000001",
               readers: { key: "1", value: "Nguyễn Văn A" },
               borrowDate: "07/30/2021",
               returnsDate: "08/10/2021",
               books: [
                  {
                     id: "B000001",
                     name: "Nhập môn lập trình",
                     category: { key: "1", value: "Công nghệ phần mềm" },
                     author: "KHTN University",
                     isLost: true,
                  },
                  {
                     id: "B000002",
                     name: "Ẩn dữ liệu và chia sẻ thông tin",
                     category: { key: "2", value: "Khoa học máy tính" },
                     author: "KHTN University",
                     isLost: false,
                  },
               ],
               fines: [
                  {
                     content: "Lost Book: Nhập môn công nghệ phần mềm",
                     value: 20000,
                  },
                  { content: "Late: 7 Day", value: 35000 },
               ],
               totalFine: 55000,
            });
         }, 1000);
      });
   },
};
export default returnsApi;
