import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

const BookInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Book Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value="B000001" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value="Nhập môn công nghệ phần mềm" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Category" value="Công nghệ phần mềm" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Author" value="KHTN University" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Publis Year" value="2017" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Publisher" value="Bộ giáo dục và đào tạo" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Added Date" value="07/30/2021" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Reciever" value="Nguyễn Văn A" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Price" value="30.000 VNĐ" />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default BookInfo;
