// Desc: Custom hook to fetch data from an API
// Params: url
// Returns: data, loading, error

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch
