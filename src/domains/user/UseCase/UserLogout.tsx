import { logout } from "src/repositories/UserRepository";
import { useRouter, NextRouter } from "next/router";
import { SetterOrUpdater } from "recoil"

type UserLogout = {
    token: string;
    router: NextRouter;
    setToken: SetterOrUpdater<{
        accessToken: string;
        tokenType: string;
    }>;
}

export const userLogout = async (values: UserLogout) => {
    const{ token, router, setToken } = values;
    const { message, status } = await logout(values.token);

    if(status === 401 && values.token) {
        setToken({
            accessToken: "",
            tokenType: ""
        });

        router.push('/login')
    } 

    if(status === 200) {
        setToken({
            accessToken: "",
            tokenType: ""
        });

        alert("logoutしました");
        router.push('/');
    }
}