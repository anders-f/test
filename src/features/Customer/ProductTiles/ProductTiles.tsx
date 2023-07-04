import { Product } from "../../../types/enums";
import styles from "./ProductTiles.module.scss";

type Props = {
  selected?: string;
  onTileChange?: React.FormEventHandler<HTMLPnRadioTileElement>;
};

const ProductTiles = ({ selected, onTileChange }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={`${styles.label} pn-s`}>
        What product do you want to view?
      </span>
      <div className={styles.radioButtons}>
        <span>
          <pn-radio-tile
            radioid="mpc"
            value="mpc"
            illustration="person-package-2"
            name="product"
            checked={selected === Product.MyPackCollect}
            onInput={onTileChange}
          >
            MyPack Collect
          </pn-radio-tile>
        </span>
        <span>
          <pn-radio-tile
            radioid="mph"
            value="mph"
            illustration="person-package-house-2"
            name="product"
            checked={selected === Product.MyPackHome}
            onInput={onTileChange}
          >
            MyPack Home
          </pn-radio-tile>
        </span>
        <span>
          <pn-radio-tile
            radioid="varubrev"
            value="varubrev"
            illustration="person-letter"
            name="product"
            checked={selected === Product.Varubrev}
            onInput={onTileChange}
          >
            Varubrev
          </pn-radio-tile>
        </span>
      </div>
    </div>
  );
};

export default ProductTiles;
