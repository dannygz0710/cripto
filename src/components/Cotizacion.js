import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { uiIcons } from "../helpers/uiIcons";

const useStyle = makeStyles((theme) => ({
  Icon: {
    marginTop: "5px",
    color: theme.palette.primary.main,
  },
  center: {
    marginBottom: "20px",
    borderBottom: "inset",
    color: theme.palette.primary.light,
  },
  succes: {
    color: "green",
    marginTop: "5px",
    marginLeft: "10px",
  },
  danger: {
    color: "red",
    marginTop: "5px",
    marginLeft: "10px",
  },
}));

const Cotizacion = ({ resultado, cryptomoneda }) => {
  const classes = useStyle();
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado.PRICE);
  const obtenerVariacion = () => {
    if (resultado.CHANGEPCTDAY >= 0) {
      return (
        <Typography variant="subtitle2" className={classes.succes}>
          {" "}
          +{resultado.CHANGEPCTDAY}%{" "}
        </Typography>
      );
    } else if (resultado.CHANGEPCTDAY < 0) {
      return (
        <Typography variant="subtitle2" className={classes.danger}>
          {" "}
          -{resultado.CHANGEPCTDAY}%{" "}
        </Typography>
      );
    }
  };
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container direction="row" className={classes.center}>
            <Grid item xs={5}>
              <Typography variant="subtitle1">Cryptomoneda </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="subtitle1">Variacion </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="subtitle1">Total </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item xs={1}>
              <span> {uiIcons(cryptomoneda)} </span>{" "}
            </Grid>

            <Grid item xs={4}>
              <Typography variant="subtitle2" className={classes.Icon}>
                {cryptomoneda}{" "}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              {obtenerVariacion()}
            </Grid>

            <Grid item xs={3}>
              <Typography variant="subtitle2" className={classes.Icon}>
                {resultado.PRICE}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Cotizacion;
