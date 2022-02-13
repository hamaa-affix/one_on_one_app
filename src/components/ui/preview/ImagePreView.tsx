import { VFC } from "react"
import Image from "next/image"

type ImageProp = {
    images: string[] | null;
}

export const ImagePreview: VFC<ImageProp> = ( props ) => {
    const { images } = props;
    return(
        <div>
            {
                images
                ? images.map((image, index) => {
                    return (
                        <Image
                            key={ image }
                            src={ image }
                            width={ 200 }
                            height={ 200 }
                            alt={ "" }
                        />
                    );
                })
                : null
            }
        </div>
    );
}