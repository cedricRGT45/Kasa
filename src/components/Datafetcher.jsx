import React, { useState, useEffect } from "react";

function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, [url]);

  return <>{data && children(data)}</>;
}

export default DataFetcher;