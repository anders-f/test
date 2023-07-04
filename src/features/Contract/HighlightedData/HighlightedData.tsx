import styles from "./HighlightedData.module.scss";

type Props = {
  label: string;
  data: string;
  icon: string;
};

const HighlightedData = ({ label, data, icon }: Props): JSX.Element => {
  return (
    <div className={styles.iconSection}>
      <div className={styles.icon}>
        <pn-icon symbol={icon} />
      </div>
      <div className={styles.iconText}>
        <span className="pn-s">{label}</span>
        <span className="pn-l">
          <strong>{data}</strong>
        </span>
      </div>
    </div>
  );
};

export default HighlightedData;
