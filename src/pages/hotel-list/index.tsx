import Head from "next/head";
import Image from "next/image";
import { auth, signoutEmail, updateData, updateUserProfile, uploadImageAndGetDownloadUrl } from "@/firebase";
import { loadingRecoil, modalPropsRecoil, userPersistRecoil } from "@/recoil/states";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const HotelList = () => {
    const router = useRouter();
    const setLoading = useSetRecoilState(loadingRecoil);
    const setModalProps = useSetRecoilState(modalPropsRecoil);
    const [user, setUser] = useRecoilState(userPersistRecoil);

    const inputOpenImageRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            window.history.pushState(null, "");
            router.push("/hotel-list");
            return false;
        });
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    useEffect(() => {
        if (router.query.auth === "signIn") {
            setLoading(false);
            setModalProps({
                title: "로그인",
                subTitleList: ["로그인 되었습니다.", "더 타임 호텔 관리자 계정에 오신것을 환영합니다."],
                btnList: [
                    {
                        title: "확인",
                    },
                ],
            });
        }
    }, []);

    const signOut = async () => {
        setLoading(true);
        await signoutEmail();
        setUser({ ...user, uid: "" });
        router.push(`/?auth=signOut`);
        setUser({
            uid: "",
            photoURL: "",
            displayName: "",
        });
    };

    const handleClickSignOut = () => {
        setModalProps({
            title: "로그아웃",
            subTitleList: ["정말로 로그아웃 하시겠습니까?"],
            btnList: [
                {
                    title: "확인",
                    func: signOut,
                },
                {
                    title: "취소",
                },
            ],
        });
    };

    const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const file = event.target.files!![0];
        if (file) {
            try {
                const downloadUrl = await uploadImageAndGetDownloadUrl(user.uid, file);
                // authentication photoURL 수정
                await updateUserProfile({ photoURL: downloadUrl });
                // db 수정
                await updateData("user", user.uid, {
                    displayName: "세진이",
                    photoURL: downloadUrl,
                });
                setUser({ ...user, photoURL: downloadUrl });
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(false);
    };

    return (
        <>
            <Head>
                <title>더 타임 호텔</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="w-full h-screen p-5 flex items-stretch"
                style={{ background: "linear-gradient(#141e30, #243b55)" }}
            >
                <div
                    className="rounded-xl w-full max-w-[1960px] bg-[url('/static/images/bg.png')] bg-cover p-[15px] bg-center"
                    style={{ boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}
                >
                    <div className=" flex justify-between items-start">
                        <div className="flex items-center">
                            <div
                                className="w-[50px] h-[50px] rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${user.photoURL})` }}
                            />
                            <span className=" text-white ml-2 text-[14px]">{user.displayName}님 반갑습니다.</span>
                        </div>
                        {/* <div className="w-[180px]">
                            <Image
                                src="/static/images/title.webp"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                                priority={true}
                            />
                        </div> */}
                        <div className=" flex gap-[5px]">
                            <div className=" flex flex-col gap-[5px]">
                                <a
                                    className=" w-[60px] h-[27.5px] bg-white rounded-[5px] flex items-center justify-center text-[12px] font-bold text-[#111]"
                                    style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}
                                    onClick={() => {
                                        (inputOpenImageRef.current as HTMLInputElement).click();
                                    }}
                                >
                                    사진 변경
                                </a>
                                <input
                                    className="hidden"
                                    type="file"
                                    accept="image/jpeg, image/png"
                                    ref={inputOpenImageRef}
                                    onChange={handleUploadImage}
                                />
                                <a
                                    className=" w-[60px] h-[27.5px] bg-white rounded-[5px] flex items-center justify-center text-[12px] font-bold text-[#111]"
                                    style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}
                                    onClick={handleClickSignOut}
                                >
                                    로그아웃
                                </a>
                            </div>
                            <a
                                className=" w-[120px] h-[60px] bg-white rounded-[5px] flex items-center justify-center text-[16px] font-bold text-[#111]"
                                style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}
                            >
                                방 만들기
                            </a>
                        </div>
                    </div>
                    <div className=" mt-[20px]" style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}>
                        <ul className=" flex items-stretch h-[45px]">
                            <li className=" flex-1 bg-amber-300 rounded-tl-[5px] rounded-tr-[5px] border-t-[1px] border-l-[1px] border-r-[1px] border-[#333]">
                                <a className="text-[14px] font-bold w-full h-full flex items-center justify-center">
                                    전체호텔
                                </a>
                            </li>
                            <li className=" flex-1 bg-amber-50 rounded-tl-[5px] rounded-tr-[5px] border-[1px] border-[#333]/50 border-b-[#333]/100">
                                <a className="text-[14px] w-full h-full flex items-center justify-center">진행중</a>
                            </li>
                            <li className=" flex-1 bg-amber-50 rounded-tl-[5px] rounded-tr-[5px] border-[1px] border-[#333]/50 border-b-[#333]/100">
                                <a className="text-[14px] w-full h-full flex items-center justify-center">마감</a>
                            </li>
                        </ul>
                        <div className=" bg-amber-300 p-[6px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#333] rounded-bl-[5px] rounded-br-[5px]">
                            <ul className="bg-amber-950 rounded-[5px] overflow-scroll"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelList;
