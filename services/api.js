import axios from "axios";

const api = axios.create({
    baseURL: "https://api.papacapim.just.pro.br:8000/" 
});

export default api;