import { v4 as uuidv4 } from "uuid";
import CheckIcon from "@mui/icons-material/Check";
import { ChangeEvent } from "react";

export interface checkboxItem {
    id: string;
    label: string;
    checked: boolean;
}

interface Props {
    items: checkboxItem[];
    onChange: (id: string, checked: boolean) => void;
}

const Checkbox = ({ items, onChange }: Props) => {
    const name = uuidv4();
    return (
        <div>
            {items.map((item) => {
                const { id, label, checked } = item;
                return (
                    <div key={id} className="flex items-center mt-[10px]">
                        <input type="checkbox" name={name} id={`${name}_${id}`} checked={checked} className="hidden" />
                        <div className="flex items-center" onClick={() => onChange(id, !checked)}>
                            <a
                                className="w-[19px] h-[19px] relative rounded-[3px] border-[2px]"
                                style={{
                                    borderColor: checked ? "#fcd34d" : "#ddd",
                                    transitionDelay: checked ? "0.2s" : "0s",
                                }}
                            >
                                <div
                                    className="absolute left-[-2px] top-[-2px] w-[19px] h-[19px] bg-amber-300 rounded-[3px] z-[1]"
                                    style={{
                                        transform: checked ? "scale(1)" : "scale(0)",
                                        transition: !checked ? "transform 0.2s 0.3s" : "transform 0.2s 0s",
                                    }}
                                />
                                <div
                                    className="relative z-[1] h-[12px] overflow-hidden left-[2px] top-[1px] duration-300 delay-300"
                                    style={{
                                        width: checked ? 12 : 0,
                                        transition: "width 0.2s",
                                        transitionDelay: checked ? "0.3s" : "0s",
                                    }}
                                >
                                    <div className="w-[12px] h-[12px] flex items-center justify-center text-white font-bold">
                                        <CheckIcon fontSize="inherit" />
                                    </div>
                                </div>
                            </a>
                            <label
                                htmlFor={`${name}_${id}`}
                                className="select-none text-[10px] cursor-pointer pl-[5px] text-[#333]"
                            >
                                {label}
                            </label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Checkbox;
