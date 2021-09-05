import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "1.3rem",
    color: theme.palette.secondary.main,
    marginBottom: "2rem",
  },
  typography: {
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      margin: "auto",
    },
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.root}>
      <Typography variant="h4" align="center" className={classes.typography}>
        Cotizador De Cryptomonedas
      </Typography>
    </AppBar>
  );
};

export default Header;
