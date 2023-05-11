import { signoutEmail } from "@/firebase";
import { loadingRecoil, loginPersistRecoil, modalPropsRecoil } from "@/recoil/states";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const HotelList = () => {
    const router = useRouter();
    const setLogin = useSetRecoilState(loginPersistRecoil);
    const setLoading = useSetRecoilState(loadingRecoil);
    const setModalProps = useSetRecoilState(modalPropsRecoil);

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
        setLogin(false);
        router.replace(`/?auth=signOut`);
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
    return (
        <a
            className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D]"
            onClick={handleClickSignOut}
        >
            로그아웃
        </a>
    );
};

export default HotelList;
