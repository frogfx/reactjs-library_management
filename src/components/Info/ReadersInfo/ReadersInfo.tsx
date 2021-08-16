import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

const ReadersInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Readers Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value="B000001" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value="Nguyễn Văn A" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Category" value="A" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Date of birth" value="20/05/1999" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Address" value="227 Nguyễn Văn Cừ, Quận 5" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Email" value="email01@gmail.com" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Create By" value="Nguyễn Văn B" />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default ReadersInfo;
