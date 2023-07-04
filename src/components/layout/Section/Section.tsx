import style from "./Section.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
  marginBottom?: boolean;
};

const Section = ({ children, className = "", marginBottom }: Props) => {
  const marginBottomCss = marginBottom ? style.marginBottom : "";
  return (
    <div className={`${style.section} ${className} ${marginBottomCss}`}>
      {children}
    </div>
  );
};

export default Section;
