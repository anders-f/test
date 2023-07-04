import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import style from "./PriceLadderChart.module.scss";

const PriceLadderChart = ({ data }: any) => {
  const [focusBar, setFocusBar] = useState<number | undefined>(undefined);

  return (
    <>
      <h2 className="pn-l">MyPack Collect - Chart</h2>
      <div className={style.container}>
        <div className={style.chartSection}>
          <ResponsiveContainer width={"100%"} height={600}>
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={16}
              margin={{ left: 20, bottom: 20, top: 20, right: 20 }}
              onMouseMove={(state) => {
                if (state?.isTooltipActive) {
                  setFocusBar(state?.activeTooltipIndex);
                } else {
                  setFocusBar(undefined);
                }
              }}
            >
              <XAxis dataKey="step" axisLine={false} dy={15} tickLine={false} />
              <YAxis
                axisLine={{ stroke: "#EAF0F4" }}
                unit="%"
                tickLine={false}
                tick={{ fill: "#969087" }}
                domain={[55, 80]}
                tickCount={6}
                width={80}
              >
                <Label
                  value="Discount"
                  angle={-90}
                  position="left"
                  fontSize={20}
                  style={{ fill: "black" }}
                />
              </YAxis>
              <Tooltip cursor={false} offset={20} content={<CustomTooltip />} />
              <Bar dataKey="discount" radius={16}>
                {data.map((entry: any, index: number) => (
                  <Cell
                    fill={focusBar === index ? entry.markedFill : entry.fill}
                    stroke={focusBar === index ? entry.markedFill : ""}
                    strokeWidth={4}
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={style.right}>
          <dl>
            <dt>Data from Logistikkalkyl</dt>
            <dd>Some file</dd>
            <dt>Number of steps</dt>
            <dd>11</dd>
            <dt>Step size</dt>
            <dd>17%</dd>
          </dl>
          <div className={style.legend}>
            <ul>
              <li>
                <span className={style.pink}></span> Decrease in volume
              </li>
              <li>
                <span className={style.blue}></span> Current volume
              </li>
              <li>
                <span className={style.green}></span> Increase in volume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceLadderChart;

const CustomTooltip = (element: Record<string, any>) => {
  if (element?.active && element?.payload && element?.payload?.length) {
    const data = element.payload[0];
    const discount = data?.payload?.discount;
    const price = data?.payload?.price;
    const step = data?.payload?.step;
    return (
      <div className={style.tooltip}>
        <dl>
          {step && (
            <>
              <dt>Step</dt>
              <dd>{step}</dd>
            </>
          )}
          {discount && (
            <>
              <dt>Discount</dt>
              <dd>{discount}%</dd>
            </>
          )}
          {price && (
            <>
              <dt>Average price</dt>
              <dd>{price} kr</dd>
            </>
          )}
        </dl>
      </div>
    );
  }

  return null;
};
