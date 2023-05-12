import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextInput from "@/components/textInput";
import Link from "next/link";
import { signinEmail } from "@/firebase";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    loadingRecoil,
    loginPersistRecoil,
    modalPropsRecoil,
    savedEmailPersistRecoil,
    saveEmailPersistRecoil,
} from "@/recoil/states";
import { useRouter } from "next/router";
import Checkbox, { checkboxItem } from "@/components/checkbox";

const SignIn = () => {
    useEffect(() => {
        if (router.query.auth === "signOut") {
            setLoading(false);
            setModalProps({
                title: "로그아웃",
                subTitleList: ["로그아웃 되었습니다.", "감사합니다. 안녕히 가십시오."],
                btnList: [
                    {
                        title: "확인",
                    },
                ],
            });
        }
    }, []);

    const router = useRouter();

    // useEffect(() => {
    //     const handlePopstate = () => {
    //         window.history.forward()
    //     }
    //     window.addEventListener('popstate', handlePopstate)
    //     return () => {
    //         window.removeEventListener('popstate', handlePopstate)
    //     }
    // }, []);

    useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            window.history.pushState(null, "");
            router.push("/auth/sign-in");
            return false;
        });
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const [saveEmail, setSaveEmail] = useRecoilState(saveEmailPersistRecoil);
    const [savedEmail, setSavedEmail] = useRecoilState(savedEmailPersistRecoil);
    const setLogin = useSetRecoilState(loginPersistRecoil);
    const setLoading = useSetRecoilState(loadingRecoil);
    const setModalProps = useSetRecoilState(modalPropsRecoil);

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [checkboxItems, setCheckboxItems] = useState<checkboxItem[]>([
        {
            id: "save",
            label: "이메일저장",
            checked: false,
        },
    ]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        setCheckboxItems([
            {
                id: "save",
                label: "이메일저장",
                checked: saveEmail,
            },
        ]);
        setEmail(savedEmail);
    }, []);

    const handleChangeEmail = (v: string) => {
        setEmail(v);
    };
    const handleChangePassword = (v: string) => {
        setPassword(v);
    };
    const handleChangeCheckboxItems = (id: string, checked: boolean) => {
        const cpCheckboxItems = JSON.parse(JSON.stringify(checkboxItems));
        cpCheckboxItems.forEach((cpCheckboxItem: checkboxItem) => {
            if (cpCheckboxItem.id === id) {
                cpCheckboxItem.checked = checked;
            }
        });
        setSaveEmail(checked);
        setCheckboxItems(cpCheckboxItems);
    };
    const checkValidation = () => {
        setErrorMsg("");
        setEmail(email.trim());
        setPassword(password.trim());
        let errorMsg = "";
        if (email.trim() === "") {
            errorMsg = "이메일을 입력해 주세요.";
        } else if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.trim()) === false) {
            errorMsg = "이메일이 형식에 맞지않습니다..";
        } else if (password.trim() === "") {
            errorMsg = "비밀번호를 입력해 주세요.";
        } else if (password.trim().length < 6) {
            errorMsg = "비밀번호는 최소 6자 이상이어야 합니다.";
        }
        return errorMsg;
    };
    const signIn = async () => {
        setLoading(true);
        const errorMsg = checkValidation();
        if (errorMsg === "") {
            try {
                await signinEmail(email, password);
                setLogin(true);
                router.push("/?auth=signIn");
                if (saveEmail) {
                    setSavedEmail(email);
                } else {
                    setSavedEmail("");
                }
            } catch (error: any) {
                if (error.code === "auth/user-not-found") {
                    setErrorMsg("가입된 메일이 없습니다. 이메일을 확인해주세요.");
                } else if (error.code === "auth/wrong-password") {
                    setErrorMsg("비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요.");
                }
                setLoading(false);
            }
        } else {
            setErrorMsg(errorMsg);
            setLoading(false);
        }
    };
    return (
        <>
            <Head>
                <title>더 타임 호텔</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-screen flex flex-col items-center justify-center pb-[25vh] px-5 duration-150">
                <div className=" bg-white p-7 rounded-xl flex flex-col w-full max-w-[450px] 300px:p-10">
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
                        inputType="email"
                        label="이메일"
                        value={email}
                        onChange={handleChangeEmail}
                        marginTop={30}
                    />
                    <TextInput
                        inputType="password"
                        label="비밀번호"
                        value={password}
                        onChange={handleChangePassword}
                        onKeyDown={(e) => {
                            e === "Enter" && signIn();
                        }}
                        marginTop={10}
                    />
                    {errorMsg && <p className="pl-[13px] text-[10px] text-red-400 mt-1">{errorMsg}</p>}
                    <Checkbox items={checkboxItems} onChange={handleChangeCheckboxItems} name="saveEmail" />
                    <a
                        className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D] font-semibold
                        "
                        onClick={signIn}
                    >
                        로그인
                    </a>
                    <div className="flex mt-[10px] justify-end">
                        <Link className="text-[10px] text-[#999]" href={"/auth/sign-up"}>
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
