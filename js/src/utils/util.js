import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export const isStringEqual = (first, second) => {
    let flag = false;
    if (first && second) {
        flag = first.toLowerCase() === second.toLowerCase();
    }
    return flag;
}

export const isLoginUser = () => {
    const token = getCookie('server_token');
    let isAutherised = false;
    if (token) {
        isAutherised = true;
    }
    return isAutherised;
}

export const deleteUserTokenDetails = (key) => {
    setCookie("server_token", "");
}