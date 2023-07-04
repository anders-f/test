import styles from "./MyPackHomeContract.module.scss";
import HighlightedData from "../../HighlightedData/HighlightedData";
import { formatNumber } from "../../../../utils/utils";

const MyPackHome = () => {
  return (
    <div>
      <div className={styles.icons}>
        <HighlightedData
          label="Total volume"
          data={formatNumber(65908)}
          icon="box-label"
        />
        <HighlightedData
          label="Effective discount"
          data={`${formatNumber(72.34)}%`}
          icon="suitcase"
        />
        <HighlightedData
          label="Average price"
          data={`${formatNumber(42.44)} kr/parcel`}
          icon="money"
        />
      </div>
      <h2 className="pn-l">
        MyPack Home - Contracted prices, per weight and zones
      </h2>
      <div className={styles.priceTable}>
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
                    0
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    1
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    2
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    3
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    4
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
                <th>
                  <div className="column-wrapper">
                    5
                    <pn-icon symbol="unfold" color="blue700" small={true} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-3 kg</td>
                <td>385 kr</td>
                <td>446 kr</td>
                <td>489 kr</td>
                <td>657 kr</td>
                <td>768 kr</td>
                <td>827 kr</td>
              </tr>
              <tr>
                <td>4-5 kg</td>
                <td>400 kr</td>
                <td>468 kr</td>
                <td>506 kr</td>
                <td>651 kr</td>
                <td>843 kr</td>
                <td>942 kr</td>
              </tr>
              <tr>
                <td>6-10 kg</td>
                <td>429 kr</td>
                <td>465 kr</td>
                <td>560 kr</td>
                <td>791 kr</td>
                <td>888 kr</td>
                <td>956 kr</td>
              </tr>
              <tr>
                <td>11-15 kg</td>
                <td>459 kr</td>
                <td>485 kr</td>
                <td>660 kr</td>
                <td>811 kr</td>
                <td>923 kr</td>
                <td>1002 kr</td>
              </tr>
              <tr>
                <td>16-20 kg</td>
                <td>469 kr</td>
                <td>525 kr</td>
                <td>691 kr</td>
                <td>911 kr</td>
                <td>933 kr</td>
                <td>1051 kr</td>
              </tr>
              <tr>
                <td>21-25 kg</td>
                <td>489 kr</td>
                <td>551 kr</td>
                <td>713 kr</td>
                <td>950 kr</td>
                <td>980 kr</td>
                <td>1100 kr</td>
              </tr>
              <tr>
                <td>26-30 kg</td>
                <td>501 kr</td>
                <td>582 kr</td>
                <td>777 kr</td>
                <td>981 kr</td>
                <td>1020 kr</td>
                <td>1194 kr</td>
              </tr>
              <tr>
                <td>31-35 kg</td>
                <td>551 kr</td>
                <td>664 kr</td>
                <td>820 kr</td>
                <td>1002 kr</td>
                <td>1161 kr</td>
                <td>1289 kr</td>
              </tr>
              <tr>
                <td>36-50 kg</td>
                <td>582 kr</td>
                <td>692 kr</td>
                <td>899 kr</td>
                <td>1056 kr</td>
                <td>1161 kr</td>
                <td>1289 kr</td>
              </tr>
            </tbody>
          </table>
        </pn-table>
      </div>
      <h2 className="pn-l">
        MyPack Home - Contracted volumes, per weight and zones
      </h2>
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
                  0
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  1
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  2
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  3
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  4
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  5
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  Average
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-3 kg</td>
              <td>91 829</td>
              <td>24 094</td>
              <td>24 856</td>
              <td>119 053</td>
              <td>37 866</td>
              <td>1 827</td>
              <td>49 801</td>
            </tr>
            <tr>
              <td>4-5 kg</td>
              <td>5 467</td>
              <td>1 309</td>
              <td>1 245</td>
              <td>981</td>
              <td>2 899</td>
              <td>5 400</td>
              <td>2 891</td>
            </tr>
            <tr>
              <td>6-10 kg</td>
              <td>16 902</td>
              <td>11 778</td>
              <td>6 501</td>
              <td>7 998</td>
              <td>2 456</td>
              <td>6 799</td>
              <td>8 610</td>
            </tr>
            <tr>
              <td>11-15 kg</td>
              <td>2 256</td>
              <td>1 973</td>
              <td>1 689</td>
              <td>1 256</td>
              <td>923</td>
              <td>2 567</td>
              <td>1 789</td>
            </tr>
            <tr>
              <td>16-20 kg</td>
              <td>1 256</td>
              <td>781</td>
              <td>567</td>
              <td>399</td>
              <td>1 456</td>
              <td>2 256</td>
              <td>1 051</td>
            </tr>
            <tr>
              <td>21-25 kg</td>
              <td>650</td>
              <td>345</td>
              <td>256</td>
              <td>190</td>
              <td>151</td>
              <td>567</td>
              <td>354</td>
            </tr>
            <tr>
              <td>26-30 kg</td>
              <td>239</td>
              <td>190</td>
              <td>176</td>
              <td>123</td>
              <td>90</td>
              <td>76</td>
              <td>149</td>
            </tr>
            <tr>
              <td>31-35 kg</td>
              <td>190</td>
              <td>151</td>
              <td>123</td>
              <td>92</td>
              <td>87</td>
              <td>114</td>
              <td>125</td>
            </tr>
            <tr>
              <td>36-50 kg</td>
              <td>23</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
              <td>2</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>13 456</td>
              <td>4 667</td>
              <td>3 877</td>
              <td>23 234</td>
              <td>5 166</td>
              <td>2 099</td>
              <td>4 3567</td>
            </tr>
          </tbody>
        </table>
      </pn-table>
    </div>
  );
};

export default MyPackHome;
