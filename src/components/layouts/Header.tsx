import Link  from "next/link";

export const Header = () => {
    return (
        <header className="flex text-center items-center justify-between  w-auto h-24 shadow-xl">
            <div className="flex items-center h-full w-40 bg-red-100">
                <div className="mx-auto">
                    <Link href="/">
                        <a>ロゴ</a>
                    </Link>
                </div>
            </div>
            <div className="flex h-full w-40 items-center bg-red-100">
                <div className="mx-auto">
                    <Link href="/login">
                        <a>login</a>
                    </Link>
                </div>
            </div>
        </header>
    );
}