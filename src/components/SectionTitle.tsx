import styled from "styled-components";

type SectionTitlePropsStyled = {
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
}
export const SectionTitle = styled.div<SectionTitlePropsStyled>`
    color: red;
`