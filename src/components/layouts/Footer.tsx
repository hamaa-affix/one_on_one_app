import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="flex items-center mt-20">
            <div className="mx-auto">
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Powered by{' '}
                <span>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </div>
        </footer>
    );
}