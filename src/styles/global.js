import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import fontFiles from "styles/fonts"
import "@fontsource/roboto"
import "@fontsource/source-sans-pro"

const globalStyles = css`
  @font-face {
    font-family: "Monument";
    src: url(${fontFiles.Monument}) format("opentype");
  }

  body {
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    color: #131414;
    overflow-x: hidden;
    font-weight: 400;
    overflow-y: scroll;
    width: 100%;
    overscroll-behavior-y: none;
    overscroll-behavior-x: none;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    // background-color: #f6f6f6;
    background-color: white;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }
    @media (max-height: 800px) {
      font-size: 15px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.grey500};
        color: white;
      }
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }
`

export default globalStyles
