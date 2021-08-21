import React from "react";
import * as s from "./StyleStatisticalLogo";

const StatisticalLogo: React.FC = () => {
   return (
      <s.Statistical>
         <s.Left>
            <div>
               <s.Title>Welcome Back, Chris!</s.Title>
               <s.Des>AppStack Dashboard</s.Des>
            </div>
         </s.Left>
         <s.Right>
            <s.Image>
               <img src="https://appstack.bootlab.io/img/illustrations/customer-support.png"></img>
            </s.Image>
         </s.Right>
      </s.Statistical>
   );
};

export default StatisticalLogo;
