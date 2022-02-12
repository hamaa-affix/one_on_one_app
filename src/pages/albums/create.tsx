import { useState, VFC, ChangeEvent } from "react";
import Image from "next/image";

//ドロップアンドドロップで投稿できるようにする
const CreateAlbum: VFC = () => {
    const [ content, setContent ] = useState<string>();

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        //引数のeventObjectがnullの可能性があるから、このガード説でnullだった時の処理を書かないとエラーになる
        if(!e.target.files) return;
        const file = e.target.files[0];
        const render = new FileReader();

        render.onload = e => {
            if(e.target?.result === null) return; 
            if(e.target?.result === undefined) return;
            console.log(e.target)
            setContent(e.target?.result.toString());
        }
        //eventで追加したファイルのUrl化、これやらないとプレビュー化でない
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
                {
                    content 
                    ?  <Image 
                        src={content}
                        width={ 500 }
                        height={ 500 }
                        alt={ "" }
                    />
                    : null
                }
            </div>
        </div>
    );
}

export default  CreateAlbum;