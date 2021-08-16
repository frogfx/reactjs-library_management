import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

const CategoryInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Category Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value="C000001" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value="Công nghệ phần mềm" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Create Date" value="07/30/2021" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Update Date" value="07/31/2021" />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default CategoryInfo;
