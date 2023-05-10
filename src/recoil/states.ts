import { atom } from "recoil";

const loadingRecoil = atom({
    key: "loadingRecoil",
    default: false,
});

interface ModalPropsRecoil {
    title: string,
    subTitleList: string[],
    btnList: {title: string; func: () => void}[]
    
}

const modalPropsRecoil = atom({
    key: "modalPropsRecoil",
    default: {
        title: "",
        subTitleList: [],
        btnList: []
    } as ModalPropsRecoil,
});

export { loadingRecoil, modalPropsRecoil };


