import React, { ReactChild, ReactChildren } from "react";
import * as s from "./StyleStatistical";

interface PropsStatistical {
   value?: string;
   des?: string;
   time?: string;
   icon?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   percent?: string;
   negative?: boolean;
}

const Statistical: React.FC<PropsStatistical> = ({
   value,
   des,
   time,
   icon,
   percent,
   negative,
}) => {
   return (
      <s.Statistical>
         <s.Top>
            <div>
               <s.Title>{value}</s.Title>
               <s.Des>{des}</s.Des>
            </div>
            <s.Icon>{icon}</s.Icon>
         </s.Top>
         <s.Bottom>
            <s.Percent negative={negative}>
               <p>{percent}</p>
            </s.Percent>
            <s.Time>{time}</s.Time>
         </s.Bottom>
      </s.Statistical>
   );
};

export default Statistical;
