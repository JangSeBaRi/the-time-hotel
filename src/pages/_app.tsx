import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <NextNProgress color="#fcd34d" startPosition={0.1} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}
