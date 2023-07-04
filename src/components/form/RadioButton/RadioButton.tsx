import style from "./RadioButton.module.scss";

type Props = {
  label: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: React.FormEventHandler;
  value: string | number;
};

const RadioButton = ({
  label,
  name,
  id,
  checked,
  onChange,
  value,
}: Props): JSX.Element => {
  return (
    <span className={style.radio}>
      <pn-radio-button
        radioid={id}
        name={name}
        value={value}
        onInput={onChange}
      ></pn-radio-button>
      <label htmlFor={id}>{label}</label>
    </span>
  );
};

export default RadioButton;
