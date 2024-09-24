import api from "../../../services/api";

export const deixarSeguirUser = async (token, user, setLoading, setError, setSuccess) => {
    try {
        const response = await api.delete(`/users/${user}/followers/0`, {
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