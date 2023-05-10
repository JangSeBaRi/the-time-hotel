import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingRecoil, modalPropsRecoil } from "@/recoil/states";

const Home = () => {
    const router = useRouter();
    const setModalProps = useSetRecoilState(modalPropsRecoil);
    const loading = useRecoilValue(loadingRecoil);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                router.push("/hotel-list");
            } else {
                router.push("/auth/sign-in");
            }
        });
    }, []);

    return (
        <>
            <Head>
                <title>더 타임 호텔</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70 flex items-center pb-[25vh] justify-center select-none z-[99999]">
                <Image src="/static/images/loading.gif" alt="loading" width={80} height={80} priority={true} />
            </div>
        </>
    );
};

export default Home;
