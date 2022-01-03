import { VFC, ReactNode } from "react"

type Props = {
    children: ReactNode;
    onClick?: () => void;
}

export const PrimaryButton: VFC<Props> = ({ children, onClick }) => {
    return (
        <button
            type="button"
            className="border w-24 p-1.5 rounded-md font-mono text-xs bg-red-100"
            onClick={ onClick }
        >
            { children }
        </button>
    );
}