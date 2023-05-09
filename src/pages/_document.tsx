import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="relative bg-[url('/static/images/main_bg.png')] bg-fixed" style={{ backgroundSize: `100vw auto` }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
