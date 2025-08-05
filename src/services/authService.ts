import * as Keychain from 'react-native-keychain';
import api from '../api';

const TOKEN_KEY = 'jwt_token';

export const setToken = async (token:string) => {
    await Keychain.setGenericPassword('accessToken', token);
}

export const getToken = async() => {
    const credentials =  await Keychain.getGenericPassword();
    if (credentials == false)return null;
    else return credentials.password;
}

export const removeToken = async() => {
    await Keychain.resetGenericPassword();
}

export const checkToken = async(token: string)=> {
    const res = await api.post(
        '/auth/validate-token',
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data;
}

export const login = async (username:string, password:string) => {
    // 서버쪽에 로그인 요청을 보내고 대기
    const res = await api.post('login', {username, password});
    // 요청이 정상적으로 처리되면 토큰을 서버에서 받음
    const token = res.data;
    setToken(token);
    // 토큰을 기기에 저장
}
export const logout = async () => {
    const res = await api.post('logout');
    // 토큰을 삭제함
    removeToken();
}
