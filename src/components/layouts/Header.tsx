import { userToken } from "@/store/atoms/UserState";
import Link  from "next/link";
import { useRouter } from "next/router"
import { useCallback, MouseEventHandler } from "react";
import { useRecoilState } from "recoil";
import type { UserToken } from "src/domains/user/Entity/UserType";
import { logout } from "src/repositories/UserRepository";

export const Header = () => {
    const router = useRouter()
    const [ token, setToken ] = useRecoilState(userToken);

    const isLogin = useCallback(() => {
        return token ? true : false;
    }, [ token ]);

    const logoutUser = async () => {
        const { message, status } = await logout();

        if(status === 200) {
            setToken({
                accessToken: "",
                tokenType: ""
            });

            router.push('/');
        }
    }

    return (
        <header className="flex text-center items-center justify-between  w-auto h-24 shadow-xl">
            <div className="flex items-center h-full w-40 bg-red-100">
                <div className="mx-auto">
                    <Link href="/">
                        <a>ロゴ</a>
                    </Link>
                </div>
            </div>
            <div className="flex h-full w-40 items-center bg-red-100">
                <div className="mx-auto">
                    { isLogin
                        ?   <Link href="/login">
                                <a>login</a>
                            </Link> 
                        :   <div onClick={logoutUser}>
                                logout
                            </div>
                    }
                </div>
            </div>
        </header>
    );
}