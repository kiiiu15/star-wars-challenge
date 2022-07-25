import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Config/Constants";

export const useFetchSingleCharacter = ({ id }) => {

    const url = `${API_URL}/people/${id}`
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        
      
        console.log({url});
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setCharacter(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return { loading, error, character };
};



export default useFetchSingleCharacter;