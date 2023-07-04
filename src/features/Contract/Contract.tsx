import style from "./Contract.module.scss";
import MyPackCollectContract from "./Products/MyPackCollectContract";
import MyPackHomeContract from "./Products/MyPackHomeContract";
import VarubrevContract from "./Products/VarubrevContract";
import Section from "../../components/layout/Section";
import { Product } from "../../types/enums";
import Select from "../../components/form/Select";

const options = [
  { name: "Logistikkalkylen_2022_01_12", value: "1" },
  { name: "Logistikkalkylen_2022_02_12", value: "2" },
];

type Props = {
  product?: Product;
};

const Contract = ({ product }: Props) => {
  return (
    <Section className={style.contract}>
      <div className={style.top}>
        <div className={style.left}>
          <h2 className="pn-xl">Customer contract</h2>
          <p>
            Here you can find the current contracted data for your customer.
            Pick and choose Logistikkalyl in the drop down to change the data
            source.
          </p>
        </div>
        <div>
          <Select
            label="Data source"
            name="source"
            options={options}
            value="1"
            onChange={() => alert("value changed")} //TODO
          />
        </div>
      </div>
      {product && <ProductView product={product} />}
    </Section>
  );
};

const ProductView = ({ product }: Props) => {
  if (product === Product.MyPackCollect) return <MyPackCollectContract />;
  else if (product === Product.MyPackHome) return <MyPackHomeContract />;
  else if (product === Product.Varubrev) return <VarubrevContract />;
  else return null;
};

export default Contract;
