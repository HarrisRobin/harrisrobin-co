import styled from "styled-components"
import {
  space,
  width,
  responsiveStyle
} from "styled-system"

const height = responsiveStyle({
  prop: 'height',
  cssProperty:'height'
})

export default  styled.img`
  max-width: 100%;
  height: 30px;
  ${space};
  ${width};
  ${height};
  opacity: 0.8;
  transition: opacity 0.20s ease-in-out;
  &:hover {
    opacity: 1;
  }
`