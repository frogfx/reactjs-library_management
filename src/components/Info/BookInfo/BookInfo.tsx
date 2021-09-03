import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";
import { Book } from "../../../interface/index";

interface PropsBook {
   book?: Book;
}

const BookInfo: React.FC<PropsBook> = ({ book = {} as Book }) => {
   return (
      <s.Info>
         <s.Title>Book Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value={book.id} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value={book.name} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Category" value={book.category.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Author" value={book.author} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Publis Year" value={book.publisYear.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Publisher" value={book.publisher} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Added Date" value={book.addDate} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Reciever" value={book.reciever} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Price" value={`${book.price} VNĐ`} />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default BookInfo;
