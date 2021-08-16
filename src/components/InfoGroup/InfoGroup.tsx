import React from "react";
import * as s from "./StyleInfoGroup";

interface PropsInfoGroup {
   name?: string;
   value?: string;
}

const InfoGroup: React.FC<PropsInfoGroup> = ({ name, value }) => {
   return (
      <s.Group>
         <s.Name>{name}: </s.Name>
         <s.Value>{value}</s.Value>
      </s.Group>
   );
};

export default InfoGroup;
