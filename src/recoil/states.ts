import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginPersistRecoil = atom<boolean>({
    key: "loginPersistRecoil",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

const loadingRecoil = atom<boolean>({
    key: "loadingRecoil",
    default: false,
});

interface ModalPropsRecoil {
    title: string;
    subTitleList: string[];
    btnList: { title: string; func?: () => void }[];
}

const modalPropsRecoil = atom<ModalPropsRecoil>({
    key: "modalPropsRecoil",
    default: {
        title: "",
        subTitleList: [],
        btnList: [],
    },
});

export { loginPersistRecoil, loadingRecoil, modalPropsRecoil };
