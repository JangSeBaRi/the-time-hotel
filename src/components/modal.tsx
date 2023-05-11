import { loadingRecoil, modalPropsRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

const Modal = () => {
    const [modalProps, setModalProps] = useRecoilState(modalPropsRecoil);
    const defaultModalProps = {
        title: "",
        subTitleList: [],
        btnList: [],
    };

    return (
        <>
            {modalProps.title && (
                <div className="fixed left-0 top-0 w-full h-screen bg-black/70 flex items-center pb-[25vh] justify-center select-none z-[99999]">
                    <div className=" max-w-[300px] w-full bg-white rounded-[5px] mx-[20px] px-[20px] py-[30px] flex flex-col items-center relative animate-modalFadeIn">
                        <div className=" w-[50px] h-[50px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] top-[-25px]"></div>
                        <div className=" w-[44px] h-[44px] bg-amber-100 rounded-full absolute left-[50%] translate-x-[-50%] top-[-22px] bg-[url('/static/images/logo.png')] bg-cover" />
                        <p className=" text-[20px] font-bold">{modalProps.title}</p>
                        <div className="mt-2">
                            {modalProps.subTitleList.map((subTitle, subTitleIdx) => {
                                return (
                                    <p
                                        className=" text-[12px] text-center mt-[5px] text-[#333] leading-[12px]"
                                        key={subTitleIdx}
                                    >
                                        {subTitle}
                                    </p>
                                );
                            })}
                        </div>
                        {modalProps.btnList.length !== 0 &&
                            modalProps.btnList.map((btn, btnIdx) => {
                                const { title, func } = btn;
                                return (
                                    <a
                                        className=" w-full h-[36px] bg-amber-300 flex items-center justify-center rounded-[5px] text-[13px] text-[#111] border-[1px] border-amber-300"
                                        style={{
                                            marginTop: btnIdx === 0 ? 20 : 5,
                                            background: btnIdx === 0 ? "#fcd34d" : "white",
                                            color: btnIdx === 0 ? "white" : "#fcd34d",
                                        }}
                                        key={btnIdx}
                                        onClick={() => {
                                            setModalProps(defaultModalProps);
                                            func && func();
                                        }}
                                    >
                                        {title}
                                    </a>
                                );
                            })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
