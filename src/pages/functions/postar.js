import api from "../../../services/api";

export const postar = async (token, message) => {
    try {
        const response = await api.post("/posts",     
            {
                "post": {
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