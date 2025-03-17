import styled from "styled-components";
import { Theme } from "../styles/Theme";
import {font} from "../styles/Common.tsx";

type SectionTitlePropsStyled = {
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsStyled>`
    ${font({family: `"Josefin Sans", sans-serif`, weight: 600, Fmax: 36, Fmin: 30})}
    text-align: center;
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
        @media ${Theme.media.mobile} {
            bottom: -24px;
        }
    }
`