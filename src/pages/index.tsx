import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loadingRecoil, loginPersistRecoil } from "@/recoil/states";

const Home = () => {
    const router = useRouter();
    const loading = useRecoilValue(loadingRecoil);
    const login = useRecoilValue(loginPersistRecoil);

    useEffect(() => {
        setTimeout(() => {
            if (login) {
                if (router.query.auth === "signIn") {
                    router.replace("/hotel-list/?auth=signIn");
                } else {
                    router.replace("/hotel-list");
                }
            } else {
                if (router.query.auth === "signOut") {
                    router.replace("/auth/sign-in/?auth=signOut");
                } else {
                    router.replace("/auth/sign-in");
                }
            }
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <title>더 타임 호텔</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=" fixed left-0 top-0 w-full h-screen bg-white" />
            {!loading && (
                <div className="fixed left-0 top-0 w-full h-screen bg-black/70 flex items-center pb-[25vh] justify-center select-none z-[100]">
                    <Image src="/static/images/loading.gif" alt="loading" width={80} height={80} priority={true} />
                </div>
            )}
        </>
    );
};

export default Home;
