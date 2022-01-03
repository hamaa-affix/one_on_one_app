import React, { VFC, useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link"
import { PrimaryButton } from "src/components/ui/button/PrimaryButton";

export const Login = () => {
    const router = useRouter();
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const handleEmail = (e) => {
        if(e.target.value.length > 255) alert('メールアドレスは255文字以下入力してください');
        setFormData({...formData, email: e.target.value });
    }

    const handlePassword = (e) => {
        if(e.target.value.length > 8) alert("パスワードは８文字以下で入力してください");
        setFormData({...formData, password: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("送信");
        //仮で設定
        router.push("/")
    }

    return (
        <form className="text-center mt-24" >
            <div>
                <h1 className="text-2xl font-mono">Withへようこそ</h1>
            </div>
            <div className="text-xs font-mono mt-4">
                <p>下記を入力してログインしてください</p>
            </div>
            <div className="mt-12">
                <label className="font-mono text-sm" htmlFor="メールアドレス">
                    メールアドレス
                </label>
                <input 
                    type="text"
                    className="border w-56 p-1.5 rounded-md ml-4"
                    value={ formData.email }
                    onChange={ handleEmail }
                />
            </div>
            <div>
                <label className="font-mono text-sm" htmlFor="パスワード">
                    パスワード
                </label>
                <input 
                    type="password"
                    className="border w-56 p-1.5 rounded-md font-mono mt-10 ml-12"
                    value={ formData.password }
                    onChange={ handlePassword }
                />
            </div>
            <div className="mt-12">
                <PrimaryButton
                    onClick={ () => handleSubmit }
                >
                    ログイン
                </PrimaryButton>
            </div>
            <div className="mt-10">
                <p className="text-xs ">パスワードを忘れた場合はこちらを
                    <span>
                        { /**  遷移先を今後修正 */}
                        <Link href="/"><a className="text-blue-500">クリック</a></Link>
                    </span>
                </p>
            </div>
        </form>
    );
}