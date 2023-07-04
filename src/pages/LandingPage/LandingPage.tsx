import Hero from "../../components/Hero";
import CustomerTiles from "../../features/Customer/CustomerTiles/CustomerTiles";
import PageContent from "../../components/layout/PageContent";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <PageContent paddingTop paddingBottom>
        <CustomerTiles />
      </PageContent>
    </>
  );
};

export default LandingPage;
