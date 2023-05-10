import { signoutEmail } from "@/firebase";
import { loadingRecoil } from "@/recoil/states";
import { useSetRecoilState } from "recoil";

const HotelList = () => {
    const setLoading = useSetRecoilState(loadingRecoil);
    const handleSignOut = async () => {
        setLoading(true);
        await signoutEmail();
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
