import style from "./PageContent.module.scss";

type Props = {
  paddingTop?: boolean;
  paddingBottom?: boolean;
  children: React.ReactNode;
  className?: string;
};

const PageContent = ({
  children,
  paddingTop,
  paddingBottom,
  className = "",
}: Props): JSX.Element => {
  const paddingTopCss = paddingTop ? style.paddingTop : "";
  const paddingBottomCss = paddingBottom ? style.paddingBottom : "";
  const css = `${paddingTopCss} ${paddingBottomCss} ${className}`;

  return <div className={`${style.container} ${css}`}>{children}</div>;
};
export default PageContent;
