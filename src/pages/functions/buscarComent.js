import api from "../../../services/api";

export const buscarComentarios = async (token, id, setLoading) => {
    console.log("buscarPostagem")
    try{
        setLoading(false)
        const response = await api
        .get(`/posts/${id}/replies`, {headers:{"x-session-token":token}});
        setLoading(true)
        return response.data;
    } catch(e){
        console.log(e);
        setLoading(true)
        return false;

    }
};