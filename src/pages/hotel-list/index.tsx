import { signoutEmail } from "@/firebase";
import { loadingRecoil, modalPropsRecoil } from "@/recoil/states";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

const HotelList = () => {
    const router = useRouter();
    const setModalProps = useSetRecoilState(modalPropsRecoil);

    const handleSignOut = async () => {
        await signoutEmail();
        setModalProps({
            title: "로그아웃",
            subTitleList: ["로그아웃 되었습니다.", "감사합니다. 안녕히 가십시오."],
            btnList: [
                {
                    title: "확인",
                },
            ],
        });
        // await router.push(`/?returnUrl=${router.asPath}`);
    };
    return (
        <a
            className="mt-[10px] bg-amber-300 text-center rounded-[5px] text-[12px] py-2 hover:bg-amber-400 duration-300 text-[#3A1D1D]"
            onClick={handleSignOut}
        >
            로그아웃
        </a>
    );
};

export default HotelList;
