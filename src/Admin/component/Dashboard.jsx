import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  return (
    <div className="px-27">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achivement />
        </Grid>


        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid xs={12} md={6}>
         
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
