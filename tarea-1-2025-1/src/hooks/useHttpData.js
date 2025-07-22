import axios from "axios";
import { useState, useEffect } from "react";

export default function useHttpData(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get(url, { signal })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading, error };
}
