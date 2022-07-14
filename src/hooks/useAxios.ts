// lib
import { useState, useEffect } from "react";
import axios from "axios";

type headersType = {
  method: string;
  headers: {
    [key: string]: any;
  };
};

const useAxios = (url: string, headers?: headersType) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, headers);

        setData(response.data);
      } catch (err) {
        console.log("API error:", err);
      }
    })();
  }, []);

  return data;
};

export default useAxios;
