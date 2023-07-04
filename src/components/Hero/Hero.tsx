import styles from "./Hero.module.scss";
import illustration from "../../assets/illustrations/person-package-lighthouse.svg";
import { useAuth } from "react-oidc-context";

const Hero = (): JSX.Element => {
  const auth = useAuth();

  const getWelcomeHeading = () => {
    const profile = auth?.user?.profile;
    if (profile) {
      return `Welcome ${profile?.given_name} ${profile?.family_name}!`;
    }
    return "Welcome!";
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className="pn-2xl">{getWelcomeHeading()}</h1>
          <p className="pn-m">
            This your one stop shop for all things related to pricing, in this
            tool you can view you customer contracts, create/edit/view your
            price ladders and create new price proposals.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
