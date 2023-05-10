import { loadingRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Loading = () => {
    const loading = useRecoilValue(loadingRecoil);
    return (
        <>
            {loading && (
                <div className="fixed left-0 top-0 w-full h-screen z-[99999] bg-black/50 flex items-center pb-[25vh] justify-center">
                    <Image src="/static/images/loading.gif" alt="loading" width={80} height={80} priority={true} />
                </div>
            )}
        </>
    );
};

export default Loading;