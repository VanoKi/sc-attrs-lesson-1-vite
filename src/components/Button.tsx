import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
    background: transparent;
    &:hover {
        background: ${Theme.colors.accent}
    }
`