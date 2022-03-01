import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
`;

export const ModalContent = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    width: 500px;
    max-height: 60%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleModal = styled.h4`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
`;
