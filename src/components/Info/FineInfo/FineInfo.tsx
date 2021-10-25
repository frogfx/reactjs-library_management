import React from "react";
import { FineReceipt } from "../../../interface/index";
import { useNavigate } from "react-router-dom";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import fineReceiptApi from "../../../api/fineReceiptApi";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../Notification/NotificationContent";
import * as s from "../StyleInfo";

interface PropsFine {
   fineReceipt?: FineReceipt;
}

const FineInfo: React.FC<PropsFine> = ({ fineReceipt = {} as FineReceipt }) => {
   const navigate = useNavigate();

   const handleDelete = () => {
      fineReceiptApi.delete(fineReceipt.id).then((res) => {
         if (res.data.delete === true) {
            navigate("/receipt-manage/fine/");
            Notification(
               "success",
               <NotificationContent
                  type="success"
                  message="Delete Fine Receipt success—check it out!"
               />
            );
         } else {
            Notification(
               "danger",
               <NotificationContent
                  type="danger"
                  message="Delete Fine Receipt failed—check it out!"
               />
            );
         }
      });
   };
   return (
      <s.Info>
         <s.Title>Fine Receipt Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Name" value={fineReceipt.reader.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Debt" value={`${fineReceipt.debt} VNĐ`} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup
                     name="Payment"
                     value={`${fineReceipt.payment} VNĐ`}
                  />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup
                     name="Remaining"
                     value={`${fineReceipt.remaining} VNĐ`}
                  />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Creat By" value={fineReceipt.createBy} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Creat Date" value={fineReceipt.createDate} />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction onDelete={() => handleDelete()} />
         </s.Content>
      </s.Info>
   );
};

export default FineInfo;
