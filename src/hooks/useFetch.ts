import { useEffect, useState } from "react";

export const useFetch = <T>(apiFunc: Function) => {
   const [data, setData] = useState<T>();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<boolean>(false);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await apiFunc();
            if (response) {
               setData(response);
               setIsLoading(false);
            }
         } catch (error) {
            setError(true);
         }
      };
      fetchData();
   }, []);
   return [data, isLoading, error] as const;
};
export default useFetch;
