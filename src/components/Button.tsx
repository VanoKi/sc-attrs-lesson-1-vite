import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
    background: transparent;
    transition: background-color 0.3s ease;
    &:hover {
        background: ${Theme.colors.accent}
    }
`