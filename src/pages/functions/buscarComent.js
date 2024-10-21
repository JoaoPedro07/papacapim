import api from "../../../services/api";

export const buscarComentarios = async (token, id) => {
    console.log("buscarPostagem")
    try{
        const response = await api
        .get(`/posts/${id}/replies`, {headers:{"x-session-token":token}});

        return response.data;
    } catch(e){
        console.log(e);
        return false;

    }
};