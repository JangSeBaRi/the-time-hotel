import { loadingRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Loading = () => {
    const loading = useRecoilValue(loadingRecoil);
    return (
        <>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70 flex items-center pb-[25vh] justify-center select-none" style={{opacity: loading ? 1 : 0, zIndex: loading ? 99999 : -1}}>
                <Image src="/static/images/loading.gif" alt="loading" width={80} height={80} priority={true} />
            </div>
        </>
    );
};

export default Loading;
