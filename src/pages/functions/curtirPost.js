import api from "../../../services/api";

export const curtirPost = async (token, id) => {
    try {
        const response = await api.post(`/posts/${id}/likes`, {}, {
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