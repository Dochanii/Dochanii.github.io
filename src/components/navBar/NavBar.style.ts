import { css } from "@emotion/react";

export const navBarContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 10%;
    min-height: 48px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

export const navBarTitle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5rem;
`;

export const navBarList = css`
    width: 20%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10rem;
    font-size: 1.8rem;
    font-weight: 600;
`;