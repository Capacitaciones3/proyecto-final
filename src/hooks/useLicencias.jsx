// import { useState } from 'react'
import { useQuery } from 'react-query';
import { getLicencias } from '../services/licenciaServices';

export const useLicencias = (id) => {

/* const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false); */

const {data, isLoading, isError, error} = useQuery(
    ['useLicencias', id || ""],
    async () => {
        return getLicencias(id||"")
    }
)

  return {
    data,
    isLoading,
    isError,
    error
  };

}