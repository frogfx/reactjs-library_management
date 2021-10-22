import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { State } from "../state/reducers";

export const useFetch = <T>(apiFunc: Function) => {
   const navigate = useNavigate();
   const [data, setData] = useState<T>();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<boolean>(false);
   const dispatch = useDispatch();
   const { logOut } = bindActionCreators(actionCreators, dispatch);
   const socket = useSelector((state: State) => state.socket.socket);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await apiFunc();
            if (response) {
               if (response.status === 401) {
                  if (response.data.authen === false) {
                     logOut(socket);
                     navigate("/login");
                  }
               }
               setData(response.data.data);
               setIsLoading(false);
            }
         } catch (error) {
            setError(true);
         }
      };
      fetchData();
   }, [isLoading]);
   return [data, isLoading, error, setIsLoading] as const;
};
export default useFetch;
