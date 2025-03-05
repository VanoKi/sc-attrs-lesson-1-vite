import styled from "styled-components";

type SectionTitlePropsStyled = {
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsStyled>`
    color: #9b0202;
    text-align: center;
`