import React, { HTMLInputTypeAttribute, useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface Props {
    inputType?: HTMLInputTypeAttribute;
    label: string;
    value: string;
    onChange: (e: string) => void;
    onKeyDown?: (code: string) => void;
    marginTop?: number;
}

const TextInput = ({ inputType = "text", label, value, onChange, onKeyDown, marginTop }: Props) => {
    const [isMasking, setIsMasking] = useState<boolean>(true);
    const handleClickLabel = (e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget.previousSibling as HTMLInputElement).focus();
    };
    const handleClickVisibilitylinedIcon = () => {
        setIsMasking((prev) => !prev);
    };
    const handleClickHighlightOffOutlinedIcon = (e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget.previousSibling!!.previousSibling as HTMLInputElement).focus();
        onChange("");
    };
    return (
        <>
            <div className="relative" style={{ marginTop }}>
                <input
                    className="w-full border-[1px] rounded-[5px] outline-none py-2 pl-3 text-[12px] focus:border-amber-300 peer/input duration-200"
                    style={{ paddingRight: inputType === "password" ? 52 : 29 }}
                    type={isMasking ? inputType : "text"}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        onKeyDown && e.nativeEvent.isComposing === false && onKeyDown(e.code);
                    }}
                />
                <span
                    className="absolute z-[1] left-[11px] px-1 duration-200 text-[#999] peer-focus/input:text-amber-300 select-none cursor-text"
                    style={{
                        top: value ? -9 : 9,
                        backgroundColor: value ? "white" : "transparent",
                        fontSize: value ? 10 : 12,
                    }}
                    onClick={handleClickLabel}
                >
                    {label}
                </span>
                {value && (
                    <a
                        className="absolute top-[5.5px] text-[#ccc]"
                        onClick={handleClickHighlightOffOutlinedIcon}
                        style={{ right: inputType === "password" ? 33 : 11, fontSize: 15 }}
                    >
                        <HighlightOffOutlinedIcon fontSize={"inherit"} />
                    </a>
                )}
                {inputType === "password" && value && (
                    <a
                        className="absolute right-[11px] top-[4px] text-[#ccc] text-[18px]"
                        onClick={handleClickVisibilitylinedIcon}
                    >
                        {isMasking ? (
                            <VisibilityOutlinedIcon fontSize={"inherit"} />
                        ) : (
                            <VisibilityOffOutlinedIcon fontSize={"inherit"} />
                        )}
                    </a>
                )}
            </div>
        </>
    );
};

export default TextInput;
