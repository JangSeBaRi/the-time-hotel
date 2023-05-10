import SelectBox, { selectOption } from "@/components/selectBox";
import TextInput from "@/components/textInput";
import { addData, signupEmail, updateUserProfile } from "@/firebase";
import { loadingRecoil, modalPropsRecoil } from "@/recoil/states";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const SignUp = () => {
    const setLoading = useSetRecoilState(loadingRecoil);
    const setModalProps = useSetRecoilState(modalPropsRecoil);
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [mcTypeOptions, setMcTypeOptions] = useState<selectOption[]>([
        {
            id: "main",
            label: "메인강사",
            select: false,
        },
        {
            id: "sub",
            label: "보조강사",
            select: false,
        },
    ]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const getMcType = () => {
        return mcTypeOptions.find((mcTypeOption) => mcTypeOption.select)?.id;
    };
    const handleChangeId = (v: string) => {
        setEmail(v);
    };
    const handleChangePassword = (v: string) => {
        setPassword(v);
    };
    const handleChangePasswordCheck = (v: string) => {
        setPasswordCheck(v);
    };
    const handleChangeName = (v: string) => {
        setName(v);
    };
    const handleChangeMycTypeOptions = (v: selectOption[]) => {
        setMcTypeOptions(v);
    };
    const checkValidation = () => {
        setErrorMsg("");
        setEmail(email.trim());
        setPassword(password.trim());
        setPasswordCheck(passwordCheck.trim());
        setName(name.trim());
        let errorMsg = "";
        if (email.trim() === "") {
            errorMsg = "이메일을 입력해 주세요.";
        } else if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.trim()) === false) {
            errorMsg = "이메일이 형식에 맞지않습니다.";
        } else if (password.trim() === "") {
            errorMsg = "비밀번호를 입력해 주세요.";
        } else if (password.trim().length < 6) {
            errorMsg = "비밀번호는 최소 6자 이상이어야 합니다.";
        } else if (password.trim() !== passwordCheck.trim()) {
            errorMsg = "비밀번호가 일치하지 않습니다.";
        } else if (name.trim() === "") {
            errorMsg = "이름을 입력해 주세요.";
        } else if (!getMcType()) {
            errorMsg = "강사선택을 선택해 주세요.";
        }
        return errorMsg;
    };

    const signUp = async () => {
        setLoading(true);
        const errorMsg = checkValidation();
        if (errorMsg === "") {
            try {
                const createUser = await signupEmail(email, password);
                await updateUserProfile({
                    displayName: name,
                    photoURL: `http://gravatar.com/avatar/${uuidv4()}?d=identicon`,
                });
                await addData("user", createUser.user.uid, {
                    uid: createUser.user.uid,
                    email,
                    name,
                    mcType: getMcType()!!,
                    photoURL: createUser.user.photoURL,
                });
                setModalProps({
                    title: "회원가입",
                    subTitleList: ["성공적으로 회원가입 되었습니다.", "더 타임 호텔에 오신 것을 환영합니다."],
                    btnList: [
                        {
                            title: "확인",
                        },
                    ],
                });
            } catch (error: any) {
                if (error.code === "auth/email-already-in-use") {
                    setErrorMsg("이미 가입 된 이메일입니다.");
                }
                if (error.code === "auth/invalid-email") {
                    setErrorMsg("이메일이 형식에 맞지않습니다.");
                } else {
                    alert(error);
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
                <title>The Time Hotel</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className=" fixed w-full z-[1]">
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
            <div className=" w-full h-screen flex flex-col items-center justify-center pb-[25vh] px-5 duration-150">
                <div className=" bg-white p-10 rounded-xl flex flex-col w-full max-w-[550px] relative z-[1]">
                    <TextInput inputType="email" label="이메일" value={email} onChange={handleChangeId} />
                    <div className="flex flex-wrap gap-1">
                        <div className="grow basis-0 min-w-[150px]">
                            <TextInput
                                inputType="password"
                                label="비밀번호"
                                value={password}
                                onChange={handleChangePassword}
                                marginTop={10}
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
                    <TextInput label="이름" value={name} onChange={handleChangeName} marginTop={10} />
                    <SelectBox
                        selectBoxLabel="강사선택"
                        selectOptions={mcTypeOptions}
                        marginTop={10}
                        onChange={handleChangeMycTypeOptions}
                    />
                    {errorMsg && <p className="pl-[13px] text-[10px] text-red-400 mt-1">{errorMsg}</p>}
                    <a
                        className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D]"
                        onClick={signUp}
                    >
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
