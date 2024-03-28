import { createGlobalStyle } from "styled-components"

import { COLORS, FONT_SIZE } from "./src/consts/design-token"

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: ${FONT_SIZE.MD};

    /** 폰트 설정 */
    font-family: 'SOYO_Maple_Bold';

    /* 스크롤바 스타일링 */
	  ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
    }
  }
  html{
    /** 배경 색상 */
    background-color: ${COLORS.GSCALE[400]};
    /** 폰트 등 색상 */
    color: ${COLORS.GSCALE[0]};
    /** 폰트 크기 */
    font-size: 62.5%; // '1rem' = '10px'
  }
  h1 {
    font-size: ${FONT_SIZE.HUGE};
  }
  h2 {
    font-size: ${FONT_SIZE.BIG};
  }
  h3 {
    font-size: ${FONT_SIZE.LG};
  }
  button {
    border: none;
  }
  input {
    outline: none;
  }  
  ul, li {
    list-style: none;
  }
`

export default GlobalStyles
