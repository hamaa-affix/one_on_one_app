import { useState, VFC, ChangeEvent } from "react";

//ドロップアンドドロップで投稿できるようにする
const CreateAlbum: VFC = () => {
    const [ file, setFile ] = useState<string | ArrayBuffer | null | undefined>();

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        //引数のeventObjectがnullの可能性があるから、このガード説でnullだった時の処理を書かないとエラーになる
        if(!e.target.files) return;
        const file = e.target.files[0];
        const render = new FileReader();

        render.onload = e => {
            setFile(e.target?.result);
        }
        render.readAsDataURL(file);
    }

    return (
        <div>
            <div>アルバム登録</div>
            <div>
                <input 
                    type="file"
                    name="file"
                    accept=".png, .jpg, .jpeg, .pdf, .doc"
                    onChange={onChangeFile}
                /> 
            </div>
            <div>
                <img src={file} />
            </div>
        </div>
    );
}

export default  CreateAlbum;