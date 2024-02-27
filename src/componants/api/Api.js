import axios from 'axios';

const Api_key = "db7eb23a-fac3-423e-93ef-6f7a7d2f798a&offset=0";

const url = `https://api.cricapi.com/v1/matches?apikey=${Api_key}`;

export const getMatches = async () => {
    try {
        const response = await axios.get(url, {
            params: {
                apikey: Api_key
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error :", error);
        throw error;
    }
}
