import style from "./StepCounter.module.scss";
import { useState } from "react";

type Props = {
  onChange: any;
  name: string;
  label?: string;
  tooltip?: string;
  min: number;
  max: number;
  defaultValue: number;
};

const StepCounter = ({
  onChange,
  name,
  label,
  tooltip,
  min,
  max,
  defaultValue,
}: Props) => {
  const [count, setCount] = useState<number>(defaultValue);

  const handleCounter = (e: any, step: number) => {
    e?.preventDefault();
    if (count + step < min) return;
    if (count + step > max) return;
    const newValue = count + step;
    onChange({
      target: {
        name: name,
        value: newValue,
      },
    });
    setCount(() => newValue);
  };

  return (
    <div>
      {label && (
        <div className={`${style.label} pn-xs`}>
          <span>{label}</span>
          {tooltip && (
            <span className={style.tooltip}>
              <pn-tooltip>{tooltip}</pn-tooltip>
            </span>
          )}
        </div>
      )}
      <div className={style.counter}>
        <button onClick={(e) => handleCounter(e, -1)}>
          <pn-icon symbol="minus-small" color="blue700" />
        </button>
        <input value={count} readOnly />
        <button onClick={(e) => handleCounter(e, 1)}>
          <pn-icon symbol="plus-small" color="blue700" />
        </button>
      </div>
    </div>
  );
};

export default StepCounter;
