import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
    a {
        display: block;
        padding: 10px;
        transition: color 0.3s ease;
        &:hover {
            color: ${Theme.colors.accent};
        }
    }
`