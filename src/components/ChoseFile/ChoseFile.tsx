import React from "react";
import * as s from "./StyleChoseFile";

const ChoseFile: React.FC = () => {
   return (
      <s.ChoseFile>
         <s.Label htmlFor="file">
            <s.UploadIcon />
            Upload
         </s.Label>
         <s.Input id="file" type="file" />
      </s.ChoseFile>
   );
};

export default ChoseFile;
