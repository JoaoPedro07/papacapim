import api from "../../../services/api";

export const comentar = async (token, id, message) => {
    try {
        const response = await api.post(`/posts/${id}/replies`,     
            {
                "reply": {
                "message": message
                }
            }, 
            {
            headers: {
                'Content-Type': 'application/json', "x-session-token": token
            }

        });
        console.log(response.data);

        return true

    } catch (e) {

        console.log(e);
        return false

    }
};