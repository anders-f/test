import { Link, useMatches } from "react-router-dom";
import style from "./Breadcrumbs.module.scss";

type Handle = {
  crumb: { name: string; dynamicRoute: boolean };
};

type BreadcrumbsProps = {
  customerName?: string;
};

const Breadcrumbs = ({ customerName }: BreadcrumbsProps) => {
  const matches = useMatches().filter((match) => match.handle);
  const lastIndex = matches.length - 1;

  return (
    <div className={style.breadcrumbs}>
      {matches?.map((match, index) => {
        const handle = match.handle as Handle;
        let crumbName = handle?.crumb?.name;
        if (handle?.crumb?.dynamicRoute && customerName) {
          crumbName = customerName;
        }
        if (index === lastIndex)
          return (
            <span className={style.item} key={index}>
              {crumbName}
            </span>
          );

        return (
          <BreadcrumbItem name={crumbName} url={match.pathname} key={index} />
        );
      })}
    </div>
  );
};

type BreadcrumbItemProps = {
  name: string;
  url: string;
};

const BreadcrumbItem = ({ name, url }: BreadcrumbItemProps) => {
  return (
    <span className={style.item}>
      <Link to={url}>{name}</Link>
      <span className={style.icon}>
        <pn-icon symbol="angle-small-right" />
      </span>
    </span>
  );
};

export default Breadcrumbs;
