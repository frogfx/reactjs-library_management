import React, { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as s from "./StyleChoseFile";

interface PropsChoseFile {
   onChange: ChangeEventHandler<HTMLInputElement>;
   innerRef?: UseFormRegisterReturn;
}

const ChoseFile: React.FC<PropsChoseFile> = ({ onChange, innerRef }) => {
   return (
      <s.ChoseFile>
         <s.Label htmlFor="image">
            <s.UploadIcon />
            Upload
         </s.Label>
         <s.Input {...innerRef} id="image" type="file" onChange={onChange} />
      </s.ChoseFile>
   );
};

export default ChoseFile;
