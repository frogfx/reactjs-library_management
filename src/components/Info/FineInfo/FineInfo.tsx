import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

const FineInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Fine Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Name" value="Nguyễn Văn A" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Debt" value="50.000" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Payment" value="30.000" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Remaining" value="20.000" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Creat Staff" value="Nguyễn Văn B" />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default FineInfo;
