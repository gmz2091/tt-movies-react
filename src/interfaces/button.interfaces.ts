/* eslint-disable no-undef */
export interface ButtonProps {
    title: string | JSX.Element ;
    buttonType?: string;
    onClick?: () => void;
    style?: { [key: string]: string };
}
