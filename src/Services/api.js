import axios from "axios";


const BASE_URL = "localhost:8080"


export const getEvents = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/events`);
        return response.data;
    } catch( error) {
        throw new Error(error.message || 'Failed to fetch events');
    }
};

