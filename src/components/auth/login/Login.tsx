import React, { VFC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextRouter, useRouter } from 'next/router'
import Link from "next/link"
import { PrimaryButton } from "src/components/ui/button/PrimaryButton";
import type { LoginInput } from "src/domains/Inorganic/types/FormTypes"

export const Login: VFC = () => {
    const router: NextRouter = useRouter();
    const { 
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: false
    });

    const onSubmit: SubmitHandler<LoginInput> = (data: LoginInput):void => {
        console.log(data);
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
                    {...register("email", {required: true, maxLength: 255, pattern: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/})}
                />
            </div>
            <div>
                { errors.email?.types?.required && <p className="text-sm text-red-500">メールアドレスを入力してください</p> }
                { errors.email?.types?.maxLength && <p className="text-sm text-red-500">メールアドレスは8文字以下で入力してください</p> }
                { errors.email?.types?.pattern && <p className="text-sm text-red-500">メールアドレスは適切な形式で入力してください</p> }
            </div>
            <div>
                <label className="font-mono text-sm" htmlFor="パスワード">
                    パスワード
                </label>
                <input 
                    type="password"
                    className="border w-56 p-1.5 rounded-md font-mono mt-10 ml-12"
                    {...register("password", {required: true, maxLength: 8, pattern: /^[a-zA-Z0-9]+$/})}
                />
            </div>
            <div>
                { errors.password?.types?.required && <p className="text-sm text-red-500">passwordを入力してください</p> }
                { errors.password?.types?.maxLength && <p className="text-sm text-red-500">passwordは8文字以下で入力してください</p> }
                { errors.password?.types?.pattern && <p className="text-sm text-red-500">passwordは適切な形式で入力してください</p> }
            </div>
            <div className="mt-12">
                <PrimaryButton onClick={handleSubmit(onSubmit)}>
                    ログイン
                </PrimaryButton>
            </div>
        </form>
    );
}