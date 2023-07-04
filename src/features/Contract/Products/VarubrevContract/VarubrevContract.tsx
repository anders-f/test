const VarubrevContract = () => {
  return (
    <>
      <h2 className="pn-l">Varubrev - Volume and average weight</h2>
      <pn-table bordered={true} striped={true}>
        <table>
          <thead>
            <tr>
              <th>
                <div className="column-wrapper">
                  Varubrev product
                  <pn-icon
                    symbol="unfold"
                    color="blue700"
                    small={true}
                  ></pn-icon>
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  Volume
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
              <th>
                <div className="column-wrapper">
                  Average weight
                  <pn-icon symbol="unfold" color="blue700" small={true} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1:st class</td>
              <td>8 500 555</td>
              <td>1437 g</td>
            </tr>
            <tr>
              <td>Economy</td>
              <td>3 720 345</td>
              <td>236 g</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>6 123 876</td>
              <td>839 g</td>
            </tr>
          </tbody>
        </table>
      </pn-table>
    </>
  );
};

export default VarubrevContract;
