import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '98b7465353d383f3d0f3bc4a284a48ae';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q : query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;
}