import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import React from "react";
import {Menu} from './menu/Menu.tsx'

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </StyledDesktopMenu>
        );
    };

const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
     @media ${Theme.media.tablet} {
         display: none;
     }
`

