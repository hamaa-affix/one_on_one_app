import  React, { VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "src/components/ui/form/Form"
import { PrimaryButton } from "src/components/ui/button/PrimaryButton"
import type { RegisterInput } from "src/domains/Inorganic/types/FormTypes";


export const Register: VFC = () => {
    const { 
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: false
    });

    const onSubmit: SubmitHandler<RegisterInput> = (data: RegisterInput): void => {
        console.log(data);
    }

    return(
        <Form styleAtrribute={"text-center mt-24"}>
            <div>
                <h1 className="text-2xl font-mono">まずはwithへ登録</h1>
            </div>
            <div className="text-xs font-mono mt-4">
                <p>下記を入力して登録をしてください</p>
            </div>
            <div className="mt-12">
                <div className="flex items-center justify-center">
                    <label className="font-mono text-sm" htmlFor="名前">
                        名前
                    </label>
                    <div>
                        <input 
                            type="text"
                            className="border w-56 p-1.5 rounded-md ml-4"
                            {...register("lastName", {required: true, maxLength: 255})}
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            className="border w-56 p-1.5 rounded-md ml-4"
                            {...register("firstName", {required: true, maxLength: 255})}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    { errors.lastName?.types?.required && <p className="text-sm text-red-500">苗字は入力してください</p> }
                    { errors.lastName?.types?.maxLength && <p className="text-sm text-red-500">苗字は255文字以下で入力してください</p> }
                </div>
                <div>
                    { errors.firstName?.types?.required && <p className="text-sm text-red-500">名前は入力してください</p> }
                    { errors.firstName?.types?.maxLength && <p className="text-sm text-red-500">名前は255文字までで入力してください</p> }
                </div>
            </div>
            <div className="mt-12 mr-64">
                <label className="font-mono text-sm" htmlFor="年齢">
                    年齢
                </label>
                <input 
                    type="text"
                    className="border w-56 p-1.5 rounded-md ml-4"
                    {...register("age", {required: true})}
                />
            </div>
            <div>
                { errors.age?.types?.required && <p className="text-sm text-red-500">年齢を入力してください</p> }
            </div>
            <div className="mt-12 mr-64">
                <label className="font-mono text-sm" htmlFor="年齢">
                    誕生日
                </label>
                <input 
                    type="date"
                    className="border w-56 p-1.5 rounded-md ml-4"
                    {...register("birthday", {required: true})}
                />
            </div>
            <div>
                { errors.birthday?.types?.required && <p className="text-sm text-red-500">生年月日を入力してください</p> }
            </div>
            <div  className="flex items-center justify-center mt-12">
                <div className="">
                    <label htmlFor="" className="font-mono text-sm">
                        <input 
                            type="radio" 
                            className=""
                            value="0"
                            {...register("attribute", {required: true})}
                        />
                        お父さん
                    </label>
                </div>
                <div className="ml-4">
                    <label htmlFor="" className="font-mono text-sm">
                        <input 
                            type="radio" 
                            className=""
                            value="1"
                            {...register("attribute", {required: true})}
                        />
                        お母さん
                    </label>
                </div>
                <div className="ml-4" >
                    <label htmlFor="" className="font-mono text-sm">
                        <input 
                            type="radio" 
                            className=""
                            value="2"
                            {...register("attribute", {required: true})}
                        />
                        子
                    </label>
                </div>
            </div>
            <div>
                { errors.attribute?.types?.required && <p className="text-sm text-red-500">家族属性を選択してください</p> }
            </div>
            <div className="mt-12 mr-80">
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
                { errors.email?.types?.maxLength && <p className="text-sm text-red-500">メールアドレスは255文字以下で入力してください</p> }
                { errors.email?.types?.pattern && <p className="text-sm text-red-500">メールアドレスは適切な形式で入力してください</p> }
            </div>
            <div className="mt-12 mr-72">
                <label className="font-mono text-sm" htmlFor="電話番号">
                    電話番号
                </label>
                <input 
                    type="text"
                    className="border w-56 p-1.5 rounded-md ml-4"
                    {...register("tel", {required: true, maxLength: 11})}
                />
            </div>
            <div>
                { errors.tel?.types?.required && <p className="text-sm text-red-500">電話番号を入力してください</p> }
                { errors.tel?.types?.maxLength && <p className="text-sm text-red-500">電話番号は11文字以下のハイフンを含めず入力してください</p> }
            </div>
            <div className="mt-12 mr-72">
                <label className="font-mono text-sm" htmlFor="パスワード">
                    パスワード
                </label>
                <input 
                    type="password"
                    className="border w-56 p-1.5 rounded-md font-mono ml-4"
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
                    登録
                </PrimaryButton>
            </div>
        </Form>
    );
}