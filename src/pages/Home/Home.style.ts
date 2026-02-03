import {css} from '@emotion/react';

export const homeContainer = css`
    position: relative;
    width: 100%;
    min-height: 100dvh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

export const swiperContainer = css`
    width: 100%;
    height: 100vh;
    
    .swiper-slide {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    .swiper-pagination {
        right: 20px !important;
        left: auto !important;
        width: auto !important;
    }
    
    .swiper-pagination-bullet {
        background: #fff;
        opacity: 0.5;
    }
    
    .swiper-pagination-bullet-active {
        opacity: 1;
    }
`;