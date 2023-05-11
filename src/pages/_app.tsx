import Loading from "@/components/loading";
import Modal from "@/components/modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <Loading />
                <Modal />
                <NextNProgress color="#fcd34d" startPosition={0.1} stopDelayMs={200} height={5} showOnShallow={true} />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}
