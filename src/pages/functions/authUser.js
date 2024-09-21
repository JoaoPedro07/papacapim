import api from "../../../services/api";


export const authUser = async (data, setLoading, setError, setSuccess) => {
    setLoading(true);
    console.log("authuser");
    try{
        console.log(data.login)
        console.log(data.password)
        const response = await api
        .post("/sessions",{
            "login": data.login,
            "password": data.password,});
        
        setLoading(false)
        return response.data;

    } catch(e){
        console.log(e)
        setLoading(false)
        return false;


    }
};