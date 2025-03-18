import { Logo } from "../../components/logo/Logo";
import {Container} from "../../components/Container.tsx";
import {FLexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu.tsx";
import {MobileMenu} from "../mobileHeader/mobileMenu.tsx"
import React from "react";
import {StyledHeader} from "./Header_Styles.ts";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FLexWrapper justify={'space-between'} aline={'center'}>
                    <Logo />
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FLexWrapper>
            </Container>
        </StyledHeader>
    );
};

