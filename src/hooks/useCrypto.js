import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyle = makeStyles(() => ({
  Input2: {
    marginTop: "20px",

    "& label.Mui-focused": {
      color: grey[600],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: grey[400],
      },
      "&:hover fieldset": {
        borderColor: grey[700],
      },
      "&.Mui-focused fieldset": {
        borderColor: grey[600],
      },
    },
  },
}));

const useCrypto = (label, stateInicial, opciones) => {
  //state del custom hook
  const [state, actualizarState] = useState(stateInicial);
  const classes = useStyle();

  const SelectCripto = () => (
    <FormControl variant="outlined" fullWidth className={classes.Input2}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
        label={label}
      >
        {opciones.map((opcion) => (
          <MenuItem key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  return [state, SelectCripto, actualizarState];
};

export default useCrypto;
