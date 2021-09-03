import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";
import { Fine } from "../../../interface/index";

interface PropsFine {
   fine?: Fine;
}

const FineInfo: React.FC<PropsFine> = ({ fine = {} as Fine }) => {
   return (
      <s.Info>
         <s.Title>Fine Receipt Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Name" value={fine.reader.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Debt" value={`${fine.debt} VNĐ`} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Payment" value={`${fine.payment} VNĐ`} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Remaining" value={`${fine.remaining} VNĐ`} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Creat Staff" value={fine.createBy} />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default FineInfo;
