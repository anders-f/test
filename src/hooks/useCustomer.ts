import { useQuery } from "react-query";
import { getCustomer } from "../api/customers";

const useCustomer = (id: string | undefined) => {
  const query = useQuery({
    queryKey: ["customer", id],
    queryFn: () => getCustomer(id),
  });
  return query;
};

export default useCustomer;
