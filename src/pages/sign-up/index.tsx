import TextInput from "@/components/textInput";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [idAlertMsg, setIdAlertMsg] = useState<string>("");
    const [passwordAlertMsg, setPasswordAlertMsg] = useState<string>("");
    const handleChangeId = (v: string) => {
        setId(v);
    };
    const handleChangePassword = (v: string) => {
        setPassword(v);
    };
    const handleChangePasswordCheck = (v: string) => {
        setPasswordCheck(v);
    };
    return (
        <>
            <Head>
                <title>The Time Hotel</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className=" fixed w-full">
                <div className="pt-[15px] pl-[15px]">
                    <Link className="w-[180px] inline-block" href="/">
                        <Image
                            src="/static/images/title.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority={true}
                        />
                    </Link>
                </div>
            </header>
            <div className=" w-full h-screen flex flex-col items-center 600px:pt-[150px] max-600px:justify-center pb-[30px] px-5">
                <div
                    className=" bg-white p-10 rounded-xl flex flex-col w-full max-w-[550px]"
                >
                    <TextInput label="아이디" value={id} onChange={handleChangeId} alertMsg={idAlertMsg} />
                    <div className="flex flex-wrap gap-1">
                        <div className="grow basis-0 min-w-[150px]">
                            <TextInput
                                inputType="password"
                                label="비밀번호"
                                value={password}
                                onChange={handleChangePassword}
                                marginTop={10}
                                alertMsg={passwordAlertMsg}
                            />
                        </div>
                        <div className="grow basis-0 min-w-[150px]">
                            <TextInput
                                inputType="password"
                                label="비밀번호 확인"
                                value={passwordCheck}
                                onChange={handleChangePasswordCheck}
                                marginTop={10}
                            />
                        </div>
                    </div>
                    <a className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D]">
                        회원가입
                    </a>
                    <div className="flex mt-[10px] justify-end">
                        <Link className="text-[10px] text-[#999]" href={"/"}>
                            이전
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
