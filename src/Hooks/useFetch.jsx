import React, { useState, useCallback } from "react";

const useFetch = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
    } catch (e) {
      setError("Erro na chamada da API");
      json = null;
    } finally {
      setDados(json);
      setLoading(null);
      return { response, json };
    }
  }, []);

  return { dados, loading, error, request };
};

export default useFetch;
