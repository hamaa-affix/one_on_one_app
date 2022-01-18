import React, {VFC, useState, useMemo, MouseEventHandler} from "react"
import Link from "next/link";
import { Login } from "src/components/auth/login/Login";
import { Register } from "src/components/auth/register/Register";

const Auth: VFC = () => {
    const [ isLogin, setIsLogin] = useState<boolean>(true);

    const handleStatment: MouseEventHandler<HTMLAnchorElement> = (): void => {
        setIsLogin(!isLogin)
    }

    const authWord: string = useMemo( (): string => {
        return isLogin ? "新規登録" : "ログイン"
    },[ isLogin ])

    return (
        <div>
            { isLogin 
                ? <Login />
                : <Register/>
            }
            <div className="mt-10 text-center">
                <p className="text-xs ">パスワードを忘れた場合はこちらを
                    <span>
                        { /**  遷移先を今後修正 */}
                        <Link href="/"><a className="text-blue-500">クリック</a></Link>
                    </span>
                </p>
            </div>
            <div className="mt-4 text-center">
                <p className="text-xs ">{ authWord }はこちらを
                    <span>
                        <a 
                            className="text-blue-500 cursor-pointer"
                            onClick={handleStatment}
                        >
                            クリック
                        </a>
                    </span>
                </p>
            </div>
        </div>
        
    );
}

export default Auth;