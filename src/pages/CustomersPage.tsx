// import useCustomers from "../hooks/useCustomers";
// import { Link } from "react-router-dom";

const CustomersPage = (): JSX.Element => {
  // const { data: customers } = useCustomers();

  return (
    <>
      <h1>Customers</h1>
      {/* <div>
        {customers?.map((customer) => (
          <div key={customer?.id}>
            <Link to={`/customers/${customer?.id}`}>{customer?.name}</Link>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default CustomersPage;
