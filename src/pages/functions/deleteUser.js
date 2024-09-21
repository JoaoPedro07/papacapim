import api from "../../../services/api";

export const deleteUser = async (token, id, setLoading, setError, setSuccess) => {
    try{
        const response = await api
        .delete(`/users/${id}`, {headers:{"x-session-token":token}});
        setLoading(true);
        setSuccess(true);
        setError(false)
        return response

    } catch(e){
        setError(true);
        setSuccess(false)
        console.log(e)
        return false;

    }
};