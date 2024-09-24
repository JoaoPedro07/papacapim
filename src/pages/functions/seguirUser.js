import api from "../../../services/api";

export const seguirUser = async (token, login, setLoading, setError, setSuccess) => {
    try {
        const response = await api.post(`/users/${login}/followers`, {}, {
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