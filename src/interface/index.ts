export interface Option {
   key?: string;
   value?: string;
}
export interface Category {
   id: string;
   name: string;
}

export interface Book {
   id: string;
   name: string;
   author: string;
   price: number;
   addDate: string;
   publisher: string;
   reciever: string;
   publisYear: Option;
   category: Option;
}

export interface BookModel {
   id: string;
   name: string;
   author: string;
   price: number;
   addDate: string;
   publisher: string;
   reciever: string;
   publisYear: string;
   category: string;
}

export interface Readers {
   id: string;
   name: string;
   address: string;
   email: string;
   createBy: string;
   createDate: string;
   birthDay: string;
   category: Option;
   phone: string;
}

export interface ReadersModel {
   id: string;
   name: string;
   address: string;
   email: string;
   createBy: string;
   createDate: string;
   birthDay: string;
   category: string;
   phone: string;
}

export interface Staff {
   id: string;
   name: string;
   image?: String;
   address: string;
   email: string;
   phone: string;
   birthDay: string;
   position: Option;
   part: Option;
   degree: Option;
   createBy: string;
   createDate: string;
}

export interface StaffModel {
   id: string;
   name: string;
   image?: String;
   address: string;
   email: string;
   phone: string;
   birthDay: string;
   position: string;
   part: string;
   degree: string;
   createBy: string;
   createDate: string;
}

export interface BookInBorrow {
   id: string;
   name: string;
   category: Option;
   author: string;
}

export interface Borrow {
   id: string;
   borrowDate: string;
   readers: Option;
   books: BookInBorrow[];
   status: string;
}

export interface BookInReturns {
   id: string;
   name: string;
   category: Option;
   author: string;
   isLost: boolean;
}

export interface FineInReturns {
   content: string;
   value: number;
}

export interface Returns {
   id: string;
   idBorrow: string;
   borrowDate: string;
   returnsDate: string;
   readers: Option;
   books: BookInReturns[];
   fines: FineInReturns[];
   totalFine: number;
}

export interface Fine {
   id: string;
   reader: Option;
   debt: number;
}

export interface FineReceipt {
   id: string;
   reader: Option;
   debt: number;
   payment: number;
   remaining: number;
   createBy: string;
   createDate: string;
}

export interface FineReceiptModel {
   reader: string;
   debt: number;
   payment: number;
   createBy: string;
}

export interface User {
   id: string;
   name: string;
   image: string;
   email: string;
   birth_day: string;
   address: string;
   phone: string;
   degree: string;
   position: string;
   part: string;
}

export interface Auth {
   id: string;
   password: string;
}
