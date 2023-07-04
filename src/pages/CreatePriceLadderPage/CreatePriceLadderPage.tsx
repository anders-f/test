import PageContent from "../../components/layout/PageContent";
import PriceLadderForm from "../../features/PriceLadder/PriceLadderForm";
import CustomerHeader from "../../features/Customer/CustomerHeader";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";

const CreatePriceLadderPage = () => {
  const { id } = useParams();
  const { data: customer } = useCustomer(id);

  return (
    <PageContent paddingTop paddingBottom>
      <Breadcrumbs customerName={customer?.name} />
      <CustomerHeader
        header={customer?.name ?? ""}
        subHeader="Org. number: 1234567890"
      />
      <PriceLadderForm />
    </PageContent>
  );
};

export default CreatePriceLadderPage;
