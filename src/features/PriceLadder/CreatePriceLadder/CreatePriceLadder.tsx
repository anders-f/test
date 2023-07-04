import styles from "./CreatePriceLadder.module.scss";
import illustration from "../../../assets/illustrations/character-computer-graphics.svg";
import Section from "../../../components/layout/Section";
import { useParams, NavLink } from "react-router-dom";

const CreatePriceLadder = () => {
  const { id } = useParams();
  return (
    <Section className={styles.container}>
      <div className={styles.left}>
        <div>
          <h2 className="pn-xl">
            This product doesn't have a price ladder yet!
          </h2>
          <p className="pn-m">
            Create a price ladder to see how this customer would perform in the
            dynamic pricing model.
          </p>
        </div>
        <div>
          <NavLink to={`/customers/${id}/create-price-ladder`}>
            <pn-button>Generate a new price ladder</pn-button>
          </NavLink>
        </div>
      </div>
      <div>
        <img src={illustration} alt="illustration" />
      </div>
    </Section>
  );
};

export default CreatePriceLadder;
