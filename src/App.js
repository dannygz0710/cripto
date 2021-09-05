import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import Cotizacion from './components/Cotizacion'; 
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';





const useStyle = makeStyles( theme => ({
  root: {
    [theme.breakpoints.up('md')] : {
     maxWidth:'60rem',
     margin:'auto',
    }
  },
   
  container: {
    paddingBottom: '8rem',
  },
 

}));

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [cryptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //evitamos la ejecucion por primera vez
    if(moneda === '') return;
    //consultar apii para obtener la cotizacion
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;

    const resultado = await Axios.get(url);
    //mostrar el spinner
    guardarCargando(true);
    //ocultar el spinnner
    setTimeout(() =>{
     
 guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
 guardarCargando(false)
    },2000)
    
  }
  cotizarCriptomoneda();
  }, [moneda,cryptomoneda]);
  
  const classes = useStyle();

  const componente = (cargando)? <Spinner/> :  <Cotizacion
  resultado={resultado}
  cryptomoneda={cryptomoneda}
  />
  return (
   
      <Paper elevation={3}  className={classes.root}>
          <Grid container
          className={classes.container}
          >
          <Grid item xs={12} >
      <Header/>
  </Grid>
  
<Grid item xs={12} sm={5}>
  <Formulario
  guardarMoneda={guardarMoneda}
 guardarCriptomoneda={guardarCriptomoneda}
 />
 </Grid>
  
 
 <Grid item xs={12} sm={7} >
  {componente}
  
   </Grid>
  
  
  </Grid>
  </Paper>
 
  );
}

export default App;
