import { userToken } from "@/store/atoms/UserState";
import Link  from "next/link";
import { useRouter } from "next/router"
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { userLogout } from "src/domains/user/UseCase/UserLogout";

export const Header = () => {
    const router = useRouter()
    const [ token, setToken ] = useRecoilState(userToken);

    const isLogin = useMemo(() => {
        return token.accessToken ? true : false;
    }, [ token ]);

    const handleClick = () => userLogout({token: token.accessToken, router: router, setToken: setToken});

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
                        ?   <div onClick={ handleClick }>
                                logout
                            </div> 
                        :   <Link href="/login">
                                <a>login</a>
                            </Link> 
                    }
                </div>
            </div>
        </header>
    );
}