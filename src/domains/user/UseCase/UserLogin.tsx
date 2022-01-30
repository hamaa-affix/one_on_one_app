import { NextRouter } from "next/router";
import { SetterOrUpdater } from "recoil"
import { login } from "src/repositories/UserRepository";
import type { LoginInput } from "src/domains/Inorganic/types/FormTypes"

type UserLogin = {
    loginInput: LoginInput;
    setToken: SetterOrUpdater<{
        accessToken: string;
        tokenType: string;
    }>;
    router: NextRouter;
}

export const userLogin = async  <T extends UserLogin>(data: T): Promise<void> => {
    const { loginInput, setToken, router } = data;

    const { message, status, token } = await login(loginInput);
    
    if(status === 200) {
        setToken({
            accessToken: token,
            tokenType: "bear"
        });
        
        alert(message);
        router.push('/')
    }

    if(!(status === 200)) alert('ログインに失敗しました');
}