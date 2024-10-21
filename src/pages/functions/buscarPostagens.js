import api from "../../../services/api";

export const buscarPostagem = async (token, pagina) => {
    console.log("buscarPostagem")
    try{
        console.log("pagina:",pagina)
        const response = await api
        .get(`/posts?page=${pagina}`, {headers:{"x-session-token":token}});
        console.log(response.data)
        return response.data;
    } catch(e){
        console.log(e);
        return false;

    }
};