import {css, keyframes} from '@emotion/react';

const slide = keyframes`
    100% {
      top: -360px;
    }
`;

const typing = keyframes`
    40%, 60% {
      left: calc(100%);
    }
    100% {
      left: 0;
    }
`;
export const about_container = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const static_txt = css`
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    width: 30%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const introduce_circle = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
`;
  
export const introduce_line = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
`;
  
export const dynamic_wrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const dynamic_txts = css`
    width: 100%;
    max-width: 800px;
    text-align: center;
    height: 90px;
    font-size: 30px;
    overflow: hidden;
    padding: 0;
    margin: 0;
`;
export const dynamic_txts_li = css`
    list-style: none;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    position: relative;
    top: 0;
    width: 100%;
    text-align: center;
    animation: ${slide} 12s steps(4) infinite;
`;
export const dynamic_txts_li_span = css`
    position: relative;
    line-height: 90px;
`;
  
export const dynamic_txts_li_span_after = css`
    content: "";
    position: absolute;
    background: #000;
  
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  
    animation: ${typing} 3s steps(20) infinite;
`;