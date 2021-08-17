import React from "react";
import * as s from "./StyleImageInfo";

interface PropsImageInfo {
   medium?: boolean;
}

const ImageInfo: React.FC<PropsImageInfo> = ({ medium }) => {
   return (
      <s.ImageInfo>
         <s.ImageBox medium={medium}>
            <s.Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
         </s.ImageBox>
      </s.ImageInfo>
   );
};

export default ImageInfo;
