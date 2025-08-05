import { useEffect, useState } from "react";
import * as Keychain from 'react-native-keychain';
import { checkToken, getToken } from "../services/authService";
import { LoadingScreen } from "../screens/LoadingScreen/LoadingScreen";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { MainNavigator } from "./main/MainNavigator";

await Keychain.setGenericPassword('accessToken', 'YOUR_JWT_TOKEN');

export default function RootNavigator(){
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState<string|null>(null);

    // 토큰 확인해서
    // 유효하면 메인 네비게이터, 유효하지않으면 로그인화면
    useEffect( () => {
        const validateAuth = async () => {
            try{
                const token = await getToken();
                if(token!=null){
                    const result = await checkToken(token);
                    if(result?.valid){
                        setUserToken(token);
                    }
                }
            }
            catch(e) {
                console.error("토큰 확인 실패", e);
            }
            finally{
                setIsLoading(false);
            }
        }
    },[userToken]);
    if(isLoading){
        return {LoadingScreen};
    }
    else if(userToken == null){
        return {LoginScreen};
    }
    else{
        return {MainNavigator};
    }
}