import style from "./CustomerTiles.module.scss";
import { NavLink } from "react-router-dom";
import useCustomers from "../../../hooks/useCustomers";

const CustomerTiles = (): JSX.Element => {
  const { data: customers } = useCustomers();

  return (
    <div>
      <h2>Customers</h2>
      <div className={style.tiles}>
        {customers?.map((customer) => (
          <NavLink
            to={`/customers/${customer?.id}`}
            className={style.tile}
            key={customer?.id}
          >
            <h3>{customer?.name}</h3>
            <p>View the customer contract, create and view price ladders</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default CustomerTiles;
