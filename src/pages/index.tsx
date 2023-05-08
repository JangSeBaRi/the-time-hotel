import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import TextInput from "@/components/textInput";
import Link from "next/link";

// import { Inter } from 'next/font/google'
{
    /* <h2 className={inter.className}></h2> */
}
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [idAlertMsg, setIdAlertMsg] = useState<string>("");
    const [passwordAlertMsg, setPasswordAlertMsg] = useState<string>("");

    const handleChangeId = (v: string) => {
        setId(v);
    };
    const handleChangePassword = (v: string) => {
        setPassword(v);
    };
    return (
        <>
            <Head>
                <title>The Time Hotel</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-screen flex flex-col items-center pt-[150px] px-5">
                <div className=" bg-white p-7 rounded-xl flex flex-col w-full max-w-[380px] 300px:p-10">
                    <div className="flex items-center justify-center">
                        <div className="w-[250px]">
                            <Image
                                src="/static/images/title.webp"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                                priority={true}
                            />
                        </div>
                    </div>
                    <p className=" text-[#999] text-[10px] text-center">더 타임 호텔 관리자 계정에 로그인 해주세요.</p>
                    <TextInput
                        label="아이디"
                        value={id}
                        onChange={handleChangeId}
                        marginTop={30}
                        alertMsg={idAlertMsg}
                    />
                    <TextInput
                        inputType="password"
                        label="비밀번호"
                        value={password}
                        onChange={handleChangePassword}
                        marginTop={10}
                        alertMsg={passwordAlertMsg}
                    />
                    <a className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D]">
                        로그인
                    </a>
                    <div className="flex mt-[10px] justify-end">
                        <Link className="text-[10px] text-[#999]" href={"/sign-up"}>
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
