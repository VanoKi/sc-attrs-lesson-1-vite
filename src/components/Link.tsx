import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px;
    &:hover {
        &::before {
            height: 10px;   
        }
    }
    &::before {
        background-color: ${Theme.colors.accent};
        content: '';
        display: inline-block;
        //height: 10px;
        position: absolute;
        z-index: -1;
        bottom: -5px;
        left: 0;
        right: 0;
    }
`