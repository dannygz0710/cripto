import { useState } from "react";


export const useLogic = () => {
    //listado de criptomonedas
    const [listacripto, guardarCripto] = useState([]);

    //error
    const [error, guardarError] = useState(false);
    //validation
    const [validation, setValidation] = useState(false);

    return {
        listacripto,
        guardarCripto,
        error,
        guardarError,
        validation,
        setValidation
    }
}
