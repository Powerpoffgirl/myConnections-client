import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";
    customStyles: React.CSSProperties;
}

export interface CustomCardProps {
    title: string;
    description: string;
    customStyles: React.CSSProperties;
    containerStyles: string;
    skills:string[];
    customButton: React.FC<CustomButtonProps>; // Changed CustomButton to customButton
    image:string;
}


