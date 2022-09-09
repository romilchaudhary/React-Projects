import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [errorMessage, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url).then((response) => {
            setIsLoading(false);
            if (!response.ok) {
                throw new Error("Something Went Wrong");
            }
            return response.json();
        }).then((result) => {            
            return setData(result);
        }).catch((error) => {
            console.log(error.message);
            setError(error.message);
        });
    }, [url]);
    
    return {
        data,
        errorMessage,
        isLoading
    };
};

export default useFetch;