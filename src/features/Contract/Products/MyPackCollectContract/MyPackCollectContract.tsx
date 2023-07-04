import style from "./MyPackCollectContract.module.scss";
import HighlightedData from "../../HighlightedData/HighlightedData";
import { formatNumber } from "../../../../utils/utils";

const MyPackCollectContract = () => {
  return (
    <div>
      <div className={style.icons}>
        <HighlightedData
          label="Total volume"
          data={formatNumber(75507)}
          icon="box-label"
        />
        <HighlightedData
          label="Effective discount"
          data={`${formatNumber(52.34)}%`}
          icon="suitcase"
        />
        <HighlightedData
          label="Average price"
          data={`${formatNumber(56.44)} kr/parcel`}
          icon="money"
        />
      </div>
      <h2 className="pn-l">
        MyPack Collect - Price, Volume and discount per weight group
      </h2>
      <div>
        <pn-table bordered={true} striped={true}>
          <table>
            <thead>
              <tr>
                <th>
                  <div className="column-wrapper">
                    Weight Parcel (kg)
                    <pn-icon
                      symbol="unfold"
                      color="blue700"
                      small={true}
                    ></pn-icon>
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    Prices
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    Volumes
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    Discount
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-3 kg</td>
                <td>46.30 kr</td>
                <td>95 756</td>
                <td>67.86 %</td>
              </tr>
              <tr>
                <td>4-5 kg</td>
                <td>48.34 kr</td>
                <td>23 985</td>
                <td>75.67 %</td>
              </tr>
              <tr>
                <td>6-10 kg</td>
                <td>51.10 kr</td>
                <td>12 456</td>
                <td>72.59 %</td>
              </tr>
              <tr>
                <td>11-15 kg</td>
                <td>54.52 kr</td>
                <td>6 592</td>
                <td>75.13 %</td>
              </tr>
              <tr>
                <td>16-20 kg</td>
                <td>56.04 kr</td>
                <td>1 234</td>
                <td>77.65 %</td>
              </tr>
              <tr>
                <td>21-25 kg</td>
                <td>62.56 kr</td>
                <td>634</td>
                <td>82.67 %</td>
              </tr>
              <tr>
                <td>26-30 kg</td>
                <td>68.53 kr</td>
                <td>200</td>
                <td>83.87 %</td>
              </tr>
              <tr>
                <td>26-30 kg</td>
                <td>68.53 kr</td>
                <td>200</td>
                <td>83.87 %</td>
              </tr>
              <tr>
                <td>31-35 kg</td>
                <td>74.26 kr</td>
                <td>5</td>
                <td>84.82 %</td>
              </tr>
              <tr>
                <td>36-50 kg</td>
                <td>80.22 kr</td>
                <td>4</td>
                <td>85.42 %</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>60.34 kr</td>
                <td>15 294</td>
                <td>79.45 %</td>
              </tr>
            </tbody>
          </table>
        </pn-table>
      </div>
    </div>
  );
};

export default MyPackCollectContract;
