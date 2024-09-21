import api from "../../../services/api";

export const authUser = async (data, setLoading, setError, setSuccess) => {
    setLoading(true);
    console.log("authuser");
    try{
        const response = await api
        .post("/sessions",{
            "login": data.login,
            "password": data.password,});
        return true;

    } catch(e){
        return false;

    }
};