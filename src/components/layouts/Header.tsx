import Link  from "next/link";

export const Header = () => {
    return (
        <header>
            <div>
                <div>log</div>
            </div>
            <div>
                <Link href="/">
                    <a>login</a>
                </Link>
            </div>
        </header>
    );
}