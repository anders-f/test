import { useQuery } from "react-query";
import { getCustomers } from "../api/customers";

const useCustomers = () => {
  const query = useQuery({
    queryKey: ["customers"],
    queryFn: () => getCustomers(),
  });
  return query;
};

export default useCustomers;
