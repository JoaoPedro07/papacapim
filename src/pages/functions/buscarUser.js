import api from "../../../services/api";

export const buscarUser = async (token, setLoading, setError, setSuccess) => {
    console.log("buscarUser")
    try{
        const response = await api
        .get(`/users`, {headers:{"x-session-token":token}});
        setLoading(true);
        setSuccess(true);
        setError(false);
        console.log(response.data)
        return response.data;
    } catch(e){
        console.log(e);
        setError(true);
        setSuccess(false)
        return false;

    }
};