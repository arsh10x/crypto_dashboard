import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          // xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            md: 2,
            // xl: 3,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access its value without selling it"
            textTag="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            textTag="Contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
