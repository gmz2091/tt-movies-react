/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Button = styled.button`
    color:'#000';
    border: none;
    border-radius: ${(props) => props.style?.borderRadius || '5px'};
    padding: 10px 20px;
    width: ${(props) => props.style?.width || null};
    height: ${(props) => props.style?.height || null};
    font-size: 13px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${colors.secondary};
    }
    &:focus {
        outline: none;
    }
`;
