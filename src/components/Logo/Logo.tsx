import React from "react";
import { Link } from "react-router-dom";
import * as s from "./StyleLogo";

const Logo: React.FC = () => {
   return (
      //<Link to="/">
      <s.Logo>
         Library <span>Management</span>
      </s.Logo>
      //</Link>
   );
};

export default Logo;
