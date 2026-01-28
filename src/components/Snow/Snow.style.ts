import { css, keyframes } from '@emotion/react';

const fall = keyframes`
    100% {
        transform: translateY(0);
    }
`;

export const snowContainer = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const snowTopLayer = css`
    will-change: transform;
    transform: translateY(-768px);
    animation: ${fall} 22.5s infinite linear;
`;

export const snowBottomLayer = css`
    will-change: transform;
    transform: translateY(-768px);
    animation: ${fall} 45s infinite linear;
`;
