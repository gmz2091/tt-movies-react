/* eslint-disable no-undef */
export interface ModalProps {
    title?: string;
    showModal?: boolean;
    setShowModal?: () => void;
    subtitle?: string;
    children: React.ReactNode;
}
