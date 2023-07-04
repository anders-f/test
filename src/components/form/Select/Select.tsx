import style from "./Select.module.scss";

type Props = {
  name: string;
  label?: string;
  tooltip?: string;
  value: string | number;
  onChange: React.ChangeEventHandler;
  options: {
    name: string;
    value: string;
    placeholder?: boolean;
  }[];
  error?: string;
};

const Select = ({
  name,
  label,
  tooltip,
  options,
  error,
  value,
  onChange,
}: Props) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={style.label}>
          {label}
          {tooltip && (
            <span className={style.tooltip}>
              <pn-tooltip>{tooltip}</pn-tooltip>
            </span>
          )}
        </label>
      )}
      <select
        name={name}
        className={style.select}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option
            value={option.value}
            disabled={option?.placeholder ? true : false}
            key={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
      {error && <span>{error}</span>}
    </>
  );
};

export default Select;
