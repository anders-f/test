import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.scss";
import SideMenu from "../SideMenu";
import TopBar from "../TopBar";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const PageLayout = (): JSX.Element => {
  const auth = useAuth();

  // useEffect(() => {
  //   if (!auth.isLoading && !auth.isAuthenticated) {
  //     auth.signinRedirect();
  //   }
  // });

  // if (!auth.isLoading && auth.isAuthenticated) {
  return (
    <>
      <TopBar />
      <div className={styles.layout}>
        <div className={styles.left}>
          <SideMenu />
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
  // }
  // return <></>;
};

export default PageLayout;
