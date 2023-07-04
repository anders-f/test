import { useState } from "react";
import { useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import PageContent from "../../components/layout/PageContent";
import Contract from "../../features/Contract";
import CustomerHeader from "../../features/Customer/CustomerHeader";
import Breadcrumbs from "../../components/Breadcrumbs";
import PriceLadderSection from "../../features/PriceLadder/PriceLadderSection";
import ProductTiles from "../../features/Customer/ProductTiles";
import { Product } from "../../types/enums";

const CustomerPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: customer } = useCustomer(id);
  const [product, setProduct] = useState(Product.MyPackCollect);

  const onTileChange = (e: React.ChangeEvent<HTMLPnRadioTileElement>) => {
    setProduct(e?.target?.value);
  };

  return (
    <PageContent paddingTop paddingBottom>
      <Breadcrumbs customerName={customer?.name} />
      <CustomerHeader
        header={customer?.name ?? ""}
        subHeader="Org. number: 1234567890"
      />
      <ProductTiles selected={product} onTileChange={onTileChange} />
      <PriceLadderSection product={product} />
      <Contract product={product} />
    </PageContent>
  );
};

export default CustomerPage;
