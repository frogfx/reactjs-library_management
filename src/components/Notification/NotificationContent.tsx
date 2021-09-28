import React from "react";
import * as s from "./StyleNotificationContent";

interface PropsNotification {
   type: "success" | "danger" | "info" | "default" | "warning";
   message: string;
}

const Notification: React.FC<PropsNotification> = ({ type, message }) => {
   return (
      <s.Notification type={type}>
         {type === "success" && <s.CheckIcon />}
         {type === "danger" && <s.TimesIcon />}
         <s.Mess>{message}</s.Mess>
      </s.Notification>
   );
};

export default Notification;
