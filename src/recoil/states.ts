import { atom } from "recoil";

const loadingRecoil = atom({
    key: "loadingRecoil",
    default: false,
});

export { loadingRecoil };