import api from "../../../services/api";

export const excluirPost = async (token, id) => {
    try{
        const response = await api
        .delete(`/posts/${id}`, {headers:{"x-session-token":token}});
        
        return true

    } catch(e){
        console.log(e)
        return false;

    }
};