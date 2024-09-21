import api from "../../../services/api";

export const alterUser = async (token, id, data, setLoading, setError, setSuccess) => {
    try{
        const response = await api
        .patch(`/users/${id}`, {
            "user": {
              "login": data.login,
              "name": data.name,
              "password": data.password,
              "password_confirmation": data.password_confirm,
            }}, {headers:{"x-session-token":token}});
        setLoading(true);
        setSuccess(true);
        setError(false)
        return response
    } catch(e){
        setError(true);
        setSuccess(false)
        return false;

    }
};