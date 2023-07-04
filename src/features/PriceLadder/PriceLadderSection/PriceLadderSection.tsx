import Section from "../../../components/layout/Section";
import CreatePriceLadder from "../CreatePriceLadder/";
import PriceLadderChart from "../PriceLadderChart";
import PriceLadderTable from "../PriceLadderTable";
import { NavLink, useParams } from "react-router-dom";
import style from "./PriceLadderSection.module.scss";
import { Product } from "../../../types/enums";
import usePriceLadder from "../../../hooks/usePriceladder";

type Props = {
  product: Product;
};

const PriceLadderSection = ({ product }: Props) => {
  const { id } = useParams();
  const { data: priceLadderData } = usePriceLadder(product);

  return (
    <>
      {priceLadderData ? (
        <Section marginBottom>
          <div className={style.top}>
            <div className={style.left}>
              <h2 className="pn-xl">Price ladder</h2>
              <p>
                This is the price ladder you have created. You can always
                generate a new price ladder if the data or any other factor
                changes.
              </p>
            </div>
            <NavLink to={`/customers/${id}/create-price-ladder`}>
              <pn-button>Generate a new price ladder</pn-button>
            </NavLink>
          </div>
          <PriceLadderChart data={priceLadderData} />
          <PriceLadderTable data={priceLadderData} />
        </Section>
      ) : (
        <CreatePriceLadder />
      )}
    </>
  );
};

export default PriceLadderSection;
