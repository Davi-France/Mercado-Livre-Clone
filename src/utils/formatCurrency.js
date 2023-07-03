const formatCurrency = (valor, currency) => {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency,
  });
};

export default formatCurrency;
