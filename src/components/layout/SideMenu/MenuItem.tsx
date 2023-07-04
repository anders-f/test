import { NavLink } from "react-router-dom";
import styles from "./SideMenu.module.scss";

type Props = {
  link: string;
  title: string;
  icon?: string;
};

const MenuItem = ({ title, icon, link }: Props): JSX.Element => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {({ isActive }) => (
        <>
          {icon && (
            <span className={styles.icon}>
              <pn-icon symbol={icon} color={isActive ? "white" : "black"} />
            </span>
          )}
          <span className={icon ? styles.title : styles.titleWithoutIcon}>
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default MenuItem;
