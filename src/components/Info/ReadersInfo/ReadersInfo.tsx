import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";
import { Readers } from "../../../interface/index";

interface PropsReaders {
   reader?: Readers;
}

const ReadersInfo: React.FC<PropsReaders> = ({ reader = {} as Readers }) => {
   return (
      <s.Info>
         <s.Title>Readers Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value={reader.id} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value={reader.name} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Category" value={reader.category.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Date of birth" value={reader.birthDay} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Address" value={reader.address} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Email" value={reader.email} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Create By" value={reader.createBy} />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default ReadersInfo;
