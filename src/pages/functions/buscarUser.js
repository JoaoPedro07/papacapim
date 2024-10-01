import api from "../../../services/api";

export const buscarUser = async (searchWord, token, setLoading, setError, setSuccess) => {
    console.log("buscarUser")
    try{
        console.log(searchWord)
        const response = await api
        .get(`/users?search=${searchWord}`, {headers:{"x-session-token":token}});
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
