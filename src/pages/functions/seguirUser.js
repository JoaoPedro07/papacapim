import api from "../../../services/api";

export const seguirUser = async (token, login, setLoading, setError, setSuccess) => {
    try{
        console.log(token)
        console.log(login)
        const response = await api
        .get(`/users/${login}/followers`, {headers:{'Content-Type': 'application/json',"x-session-token":token}});

        console.log(response);
        return response
    } catch(e){
        console.log(e);
        return false;

    }
};