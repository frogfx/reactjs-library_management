import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

const StaffInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Staff Detail</s.Title>
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
                  <InfoGroup
                     name="Address"
                     value="227 Nguyễn Văn Cừ, Quận 5 "
                  />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Date of birth" value="20/05/1999" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Phone" value="0123456789" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Degree" value="College" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Position" value="Employee" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Part" value="Librarian" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow></s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default StaffInfo;
