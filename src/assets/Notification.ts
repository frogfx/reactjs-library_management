import { store } from "react-notifications-component";
import { ReactElement } from "react";

const Notification = (
   type: "success" | "danger" | "info" | "default" | "warning",
   //message: string,
   content: ReactElement
) => {
   store.addNotification({
      content: content,
      message: "",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated animate__fadeIn"],
      animationOut: ["animate__animated animate__fadeOut"],
      dismiss: {
         duration: 2000,
      },
   });
};

export default Notification;
