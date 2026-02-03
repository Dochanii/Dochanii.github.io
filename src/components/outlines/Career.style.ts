import { css } from '@emotion/react';

export const careerContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    
`;
export const careerTitle = css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    h2{
        font-size: 4rem;
        color: #fff;
    }
`;

export const careerItemContainer = css`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    // background-color: red;
`;

export const careerProfile = css`
    width: 45%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const careerList = css`
    width: 55%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-left: 2px solid gray;
    padding : 0 2rem;
`;
export const careerListItem = css`
    list-style: none;
    line-height: 2;
    font-size:2rem;
    color: #fff;
    padding : 0 2rem;

`;