import React from "react";
import * as s from "../StyleTable";

interface PropsDes {
   des?: string;
}

const TableDes: React.FC<PropsDes> = ({ des }) => {
   return <s.Des>{des}</s.Des>;
};

export default TableDes;
