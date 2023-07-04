import style from "./PriceLadderTable.module.scss";
import { formatNumber } from "../../../utils/utils";

const PriceLadderTable = ({ data }: any) => {
  return (
    <div className={style.container}>
      <h2 className="pn-l">MyPack Collect - Table</h2>
      <pn-table bordered={true} striped={true}>
        <table>
          <thead>
            <tr>
              <th>
                <div className="column-wrapper">
                  Ladder step
                  <pn-icon
                    symbol="unfold"
                    color="blue700"
                    small={true}
                  ></pn-icon>
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  Rolling 12 month volume
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  Average price
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ step, volume, price }: any, index: number) => (
              <tr key={index}>
                <td>{step}</td>
                <td>{formatNumber(volume)}</td>
                <td>{formatNumber(price)} kr</td>
              </tr>
            ))}
          </tbody>
        </table>
      </pn-table>
    </div>
  );
};

export default PriceLadderTable;
