import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => (
  <Grid container direction="row" justify="center">
    <CircularProgress />
  </Grid>
);

export default Spinner;
