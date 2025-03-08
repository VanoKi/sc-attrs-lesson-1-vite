import styled from "styled-components";
import { Theme } from "../styles/Theme";

type SectionTitlePropsStyled = {
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsStyled>`
    text-align: center;
    font-family: "Josefin Sans" sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;

    position: relative;

    margin-bottom: 90px;
    &::before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`