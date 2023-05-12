import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body
                className="relative bg-[url('/static/images/main_bg.png')] bg-fixed"
                style={{ backgroundSize: `100vw auto` }}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
