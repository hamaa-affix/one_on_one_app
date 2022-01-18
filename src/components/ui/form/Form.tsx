import { ReactNode, VFC } from "react";

type Form = {
    children: ReactNode;
    styleAtrribute: string
}

export const Form: VFC<Form> = (props) => {
    const { children, styleAtrribute} = props
    return (
        <form className={ styleAtrribute }>
            { children }
        </form>
    );
}