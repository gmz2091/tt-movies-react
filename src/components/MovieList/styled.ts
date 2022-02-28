import styled from 'styled-components';

export const MovieListWrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        height: 100%;
        padding: 0px;
        margin: auto;
        /* media query */
        @media (max-width: 768px) {
            width: 90%;
        }
    `;
export const MovieListContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 100%;
        padding: 10px 5px;
        margin: 5px;
        border: 0.5px solid gray;
        @media (max-width: 768px) {
            margin: 20px auto;
        }
    `;

export const MovieTitle = styled.h1`
        font-size: 1.1em;
        color: #333;
        margin: 0px;
        padding: 10px;
        text-align: center;
    `;
export const MoviePoster = styled.img`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        margin: 15px;
        padding: 0px;
        border-radius: 100%;
    `;
