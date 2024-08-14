import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res.rates)) // Correctly setting the rates object
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
