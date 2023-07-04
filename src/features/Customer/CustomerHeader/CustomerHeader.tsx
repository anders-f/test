import style from "./CustomerHeader.module.scss";

type Props = {
  header: string;
  subHeader: string;
};

const CustomerHeader = ({ header, subHeader }: Props) => {
  return (
    <div className={style.header}>
      <h1 className="pn-2xl">{header}</h1>
      <p className="pn-m">{subHeader}</p>
    </div>
  );
};

export default CustomerHeader;
