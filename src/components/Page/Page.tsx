import React, { ReactChild, ReactChildren } from "react";
import * as s from "./StylePage";

interface PropsPage {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   isToggle?: boolean;
}

const Page: React.FC<PropsPage> = ({ children, isToggle }) => {
   return <s.Page isToggle={isToggle}>{children}</s.Page>;
};

export default Page;
