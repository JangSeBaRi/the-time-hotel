import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export interface selectOption {
    id: string;
    label: string;
    select?: boolean;
}

interface Props {
    selectBoxLabel: string;
    selectOptions: selectOption[];
    onChange: (e: selectOption[]) => void;
    marginTop?: number;
}

const SelectBox = ({ selectBoxLabel, selectOptions, onChange, marginTop }: Props) => {
    const [openSelectBox, setOpenSelectBox] = useState<boolean>(false);
    const selectionLabel = selectOptions.find((selectOption) => selectOption.select)?.label;

    return (
        <>
            <div className="relative" style={{ marginTop }}>
                <button
                    className="flex justify-between items-center w-full h-[36px] rounded-[5px] border-[1px] text-[12px] px-3 focus:border-amber-300 peer/button"
                    onClick={() => setOpenSelectBox(true)}
                >
                    <span className=" truncate">{selectionLabel}</span>
                    <ArrowDropDownIcon />
                </button>
                <span
                    className="absolute z-[1] left-[11px] px-1 duration-200 text-[#999] select-none peer-focus/button:text-amber-300 cursor-pointer"
                    style={{
                        top: openSelectBox || selectionLabel ? -9 : 9,
                        backgroundColor: openSelectBox || selectionLabel ? "white" : "transparent",
                        fontSize: openSelectBox || selectionLabel ? 10 : 12,
                    }}
                    onClick={() => setOpenSelectBox(true)}
                >
                    {selectBoxLabel}
                </span>
            </div>
            <>
                {openSelectBox && (
                    <div
                        id="bottom_modal_background"
                        className="fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]"
                        onClick={() => setOpenSelectBox(false)}
                    />
                )}
                <div
                    id="bottom_modal_wrap"
                    className="fixed left-0 bg-white w-full h-[25vh] rounded-tl-2xl rounded-tr-2xl border-t-[1px] z-[100] duration-300"
                    style={{ bottom: openSelectBox ? -2 : "-25vh" }}
                >
                    <div className="relative">
                        <div className="absolute top-0 left-[16px] bg-white flex items-center justify-center w-[calc(100vw-32px)] h-[16px]">
                            <div className="w-[35px] h-[3px] bg-[#ccc] rounded-full" />
                        </div>
                        <ul className="relative max-w-[450px] mx-auto h-[25vh] py-5 px-8 overflow-y-scroll hide-scroll-bar">
                            {selectOptions.map((selectOption) => {
                                const { id, label, select } = selectOption;
                                return (
                                    <li key={id}>
                                        <a
                                            className="block text-[12px] leading-[30px] text-center"
                                            style={{
                                                color: select ? "#fbbf24" : "#999",
                                            }}
                                            onClick={() => {
                                                const cpSelectOptions = JSON.parse(JSON.stringify(selectOptions));
                                                cpSelectOptions.forEach((cpSelectOption: selectOption) => {
                                                    cpSelectOption.select = id === cpSelectOption.id;
                                                });
                                                onChange(cpSelectOptions);
                                                setOpenSelectBox(false);
                                            }}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </>
        </>
    );
};

export default SelectBox;
