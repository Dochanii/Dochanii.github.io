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
export const static_txt = css`
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    height: 40%;
`;
  
export const introduce_line = css`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
  
export const dynamic_wrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
`;
export const dynamic_txts = css`
    text-align: center;
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    overflow: hidden;
`;
export const dynamic_txts_li = css`
    list-style: none;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    position: relative;
    top: 0;
    animation: ${slide} 12s steps(4) infinite;
`;
export const dynamic_txts_li_span = css`
    position: relative;
    line-height: 90px;
`;
  
export const dynamic_txts_li_span_after = css`
    content: "";
    position: absolute;
    background: rgb(52, 52, 52);
  
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  
    border-left: 2px solid #fc6d6d;
    animation: ${typing} 3s steps(20) infinite;
`;