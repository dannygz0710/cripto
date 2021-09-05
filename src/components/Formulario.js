import React, { useEffect } from 'react';
import useMoneda from '../hooks/useMoneda';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { useLogic } from '../hooks/useLogic';



const useStyle = makeStyles(theme => ({
  Button: {
   
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    marginBottom: "30px",
    marginTop:"20px",
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
     
    },
  },
}));



const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {

  const {listacripto,
    guardarCripto,
    error,
    guardarError,
    validation,
    setValidation } = useLogic();

  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar Americano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'ARS', nombre: 'Peso Argentino' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
  ]

  //utilizar useMoneda
  const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);

  //utilizar useCripto
  const [criptomoneda, SelectCripto] = useCrypto('Elige tu Criptomoneda', '', listacripto);

  //Ejecutar llamado a la API
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      const removed = resultado.data.Data
      guardarCripto(removed);
    
    }
    consultarAPI();
  }, [guardarCripto])

  //cuando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault();

    if (moneda === '') {
      guardarError(true);
      return;
    }if (criptomoneda === '') {
      setValidation(true);
      return;
    }

    guardarError(false);
    setValidation(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
   
  }
  // makestyle
  const classes = useStyle();
  return (
    <Container fixed>
      <form
        onSubmit={cotizarMoneda}
      >
       <SelectMonedas />
        {error? <Typography
         variant="subtitle1"
          gutterBottom 
          color="error"> Campo Requerido* </Typography>: null}
        <SelectCripto />
        {validation? <Typography
         variant="subtitle1"
          gutterBottom 
          color="error"> Campo Requerido* </Typography>: null}
        <Button
          className={classes.Button}
          variant="contained"
          type="submit"
          value="Calcular"
        >Calcular</Button>

      </form>
    </Container>
  );
}

export default Formulario;