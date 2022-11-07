import axios, {AxiosInstance} from 'axios';

export const useCustomAxios = (): AxiosInstance => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }
    return axios.create(config);
};
