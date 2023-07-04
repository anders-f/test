import styles from "./TopBar.module.scss";
import logo from "../../../assets/postnord.svg";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { useAuth } from "react-oidc-context";

const TopBar = (): JSX.Element => {
  const auth = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownContentRef = useRef(null);

  useClickOutside(dropdownContentRef, () => setDropdownOpen(false));

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const getFullName = () => {
    const profile = auth?.user?.profile;
    if (profile) {
      return `${profile?.given_name} ${profile?.family_name}`;
    }
    return "Name missing";
  };

  const getEmail = () => {
    const profile = auth?.user?.profile;
    if (profile) {
      return profile?.email;
    }
    return "Email missing";
  };

  const logout = (e: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    auth.signoutRedirect();
  };

  return (
    <div className={styles.topBar}>
      <NavLink to="/">
        <img src={logo} alt="logotype" className={styles.logo} />
      </NavLink>
      <div className={styles.right} onClick={handleClick}>
        <span>{getFullName()}</span>
        <pn-icon symbol={"user"} color="white" />
      </div>
      {dropdownOpen && (
        <div ref={dropdownContentRef} className={styles.dropdown}>
          <div className={styles.top}>
            <div className="pn-s">
              <strong>Logged in as</strong>
            </div>
            <div className="pn-s">{getFullName()}</div>
            <div className="pn-2xs">{getEmail()}</div>
          </div>
          <div className={styles.bottom}>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
