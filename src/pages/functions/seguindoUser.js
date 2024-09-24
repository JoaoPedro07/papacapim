import api from "../../../services/api";

export const seguindoUser = async (token, user, setLoading, setError, setSuccess) => {
    try {
        console.log(user)
        const response = await api.get(`/users/${user}/followers`, {
            headers: {
                'Content-Type': 'application/json', "x-session-token": token
            }

        });
        return response

    } catch (e) {
        console.log(e);

    }
};