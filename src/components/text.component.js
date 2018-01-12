import styled from "styled-components"
import {
  space,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  responsiveStyle
} from "styled-system"

const lineHeight = responsiveStyle({
  prop: "lineHeight",
  cssProperty: "lineHeight"
})

export default styled.div`
  display: flex;
  position: relative;
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${letterSpacing};
`
