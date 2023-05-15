import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loadingRecoil, userPersistRecoil } from "@/recoil/states";
import { delay } from "@/utils/delay";

const Home = () => {
    const router = useRouter();
    const loading = useRecoilValue(loadingRecoil);
    const user = useRecoilValue(userPersistRecoil);

    useEffect(() => {
        (async () => {
            await delay(1000);
            if (user.uid) {
                if (router.query.auth === "signIn") {
                    router.push("/hotel-list/?auth=signIn", undefined, { shallow: true });
                } else {
                    router.push("/hotel-list", undefined, { shallow: true });
                }
            } else {
                if (router.query.auth === "signOut") {
                    router.push("/auth/sign-in/?auth=signOut", undefined, { shallow: true });
                } else {
                    router.push("/auth/sign-in", undefined, { shallow: true });
                }
            }
        })();
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
