import { useState, VFC, ChangeEvent } from "react";
import Image from "next/image";
import { Form } from "src/components/ui/form/Form";
import { PrimaryButton } from "src/components/ui/button/PrimaryButton"
import { ImagePreview } from "src/components/ui/preview/ImagePreView";

//ドロップアンドドロップで投稿できるようにする
const CreateAlbum: VFC = () => {
    const [ images, setImages ] = useState<Array<string>>([]);

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        //引数のeventObjectがnullの可能性があるから、このガード説でnullだった時の処理を書かないとエラーになる
        if(!e.target.files) return;
        const file = e.target.files[0];
        const render = new FileReader();

        render.onload = e => {
            if(e.target?.result === null) return; 
            if(e.target?.result === undefined) return;

            setImages([...images, e.target?.result.toString()]);
        }
        //eventで追加したファイルのUrl化、これやらないとプレビュー化でない
        render.readAsDataURL(file);
    }

    const onSubmit = () => {}

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
                <ImagePreview 
                    images={images}
                />
                <PrimaryButton onClick={onSubmit}>登録</PrimaryButton>
            </form>
            <h1>test</h1>
        </div>
    );
}

export default  CreateAlbum;
