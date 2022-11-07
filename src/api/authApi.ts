import {usePost} from './template/usePost';
import {HOST} from "../env";

interface UserAuthInfo {
    username: string;
    password: string;
}

export const useLogIn = () => {
    return usePost<UserAuthInfo, null>(`${HOST}auth/log-in`);
};

export const useLogOut = () => {
    return usePost<null, null>(`${HOST}auth/log-out`);
};

