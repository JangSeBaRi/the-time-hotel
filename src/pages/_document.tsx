import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-[url('/static/images/main_bg.png')] bg-fixed" style={{backgroundSize: `100vw auto`}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
