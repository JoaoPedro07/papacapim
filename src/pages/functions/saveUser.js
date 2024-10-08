import api from "../../../services/api";

export const saveUser = async (data, setLoading, setError, setSuccess) => {
    setLoading(true);
    console.log("saveuser");
    try{
        const response = await api
        .post("/users", {
            "user": {
              "login": data.login,
              "name": data.name,
              "password": data.password,
              "password_confirmation": data.password_confirm,
            }});
        console.log(response)
        setLoading(false);
        setSuccess(true);
    } catch(e){
        console.log(e);
        setLoading(false);
        setError(true);
    }
};