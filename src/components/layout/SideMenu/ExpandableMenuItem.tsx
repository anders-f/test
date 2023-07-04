import { ReactNode, useState } from "react";
import styles from "./SideMenu.module.scss";

type Props = {
  title: string;
  icon: string;
  children: ReactNode;
};

const ExpandableMenuItem = ({ title, icon, children }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={styles.expandable} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <span className={styles.icon}>
            <pn-icon symbol={icon} color="black" />
          </span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={isOpen ? styles.rotated : styles.chevron}>
          <pn-icon symbol="angle-small-down" color="black" />
        </div>
      </div>

      <div className={isOpen ? styles.expanded : styles.closed}>{children}</div>
    </>
  );
};

export default ExpandableMenuItem;
