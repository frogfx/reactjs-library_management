import React from "react";
import * as s from "./StyleImageInfo";

interface PropsImageInfo {
   medium?: boolean;
   src?: string;
}

const ImageInfo: React.FC<PropsImageInfo> = ({ medium, src }) => {
   return (
      <s.ImageInfo>
         <s.ImageBox medium={medium}>
            <s.Image src={src} />
         </s.ImageBox>
      </s.ImageInfo>
   );
};

export default ImageInfo;
