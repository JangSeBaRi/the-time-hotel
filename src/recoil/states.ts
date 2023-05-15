import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userPersistRecoil = atom<{ uid: string; photoURL: string | null; displayName: string | null }>({
    key: "userPersistRecoil",
    default: {
        uid: "",
        photoURL: "",
        displayName: "",
    },
    effects_UNSTABLE: [persistAtom],
});

const saveEmailPersistRecoil = atom<boolean>({
    key: "saveEmailPersistRecoil",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

const savedEmailPersistRecoil = atom<string>({
    key: "savedEmailPersistRecoil",
    default: "",
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

export { userPersistRecoil, saveEmailPersistRecoil, savedEmailPersistRecoil, loadingRecoil, modalPropsRecoil };
