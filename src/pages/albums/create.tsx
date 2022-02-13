import { useState, VFC, ChangeEvent } from "react";
import Image from "next/image";

//ドロップアンドドロップで投稿できるようにする
const CreateAlbum: VFC = () => {
    const [ content, setContent ] = useState<Array<string>>([]);

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        //引数のeventObjectがnullの可能性があるから、このガード説でnullだった時の処理を書かないとエラーになる
        if(!e.target.files) return;
        const file = e.target.files[0];
        const render = new FileReader();
        console.log(file);

        render.onload = e => {
            if(e.target?.result === null) return; 
            if(e.target?.result === undefined) return;

            setContent([...content, e.target?.result.toString()]);
        }
        //eventで追加したファイルのUrl化、これやらないとプレビュー化でない
        render.readAsDataURL(file);
    }

    return (
        <div>
            <div>写真登録</div>
            <form action="">
                <input
                    type="file"
                    name="file"
                    multiple
                    accept=".png, .jpg, .jpeg, .pdf, .doc"
                    onChange={onChangeFile}
                /> 
            <div>
                {
                    content.length > 0
                    ? content.map((img, index) => {
                        return (
                            <Image 
                                key={ img }
                                src={ img }
                                width={ 250 }
                                height={ 250 }
                                alt={ "" }
                            />
                        );
                    })
                    : null
                }
            </div>
            </form>
        </div>
    );
}

export default  CreateAlbum;