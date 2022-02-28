import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    &:focus {
        border: 0.5px solid #000;
    }
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 78%;
    height: 100%;
    padding: 10px;
    margin: auto;
    @media (max-width: 768px) {
            width: 84%;
        }
`;
