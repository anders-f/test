import styles from "./SideMenu.module.scss";
import ExpandableMenuItem from "./ExpandableMenuItem";
import MenuItem from "./MenuItem";
import useCustomers from "../../../hooks/useCustomers";

const SideMenu = (): JSX.Element => {
  const { data: customers } = useCustomers();

  return (
    <div className={styles.menu}>
      <MenuItem title="Home" icon="home" link="/" />
      <ExpandableMenuItem title="Customers" icon="suitcase">
        {customers?.map((customer) => (
          <MenuItem
            title={customer.name}
            link={`/customers/${customer?.id}`}
            key={customer.id}
          />
        ))}
      </ExpandableMenuItem>
    </div>
  );
};

export default SideMenu;
