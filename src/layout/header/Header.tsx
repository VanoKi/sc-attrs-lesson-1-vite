import { Logo } from "../../components/logo/Logo";
import {Container} from "../../components/Container.tsx";
import {FLexWrapper} from "../../components/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu.tsx";
import {MobileMenu} from "../mobileHeader/mobileMenu.tsx"
import React from "react";
import {S} from "./Header_Styles.ts";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FLexWrapper justify={'space-between'} aline={'center'}>
                    <Logo />
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FLexWrapper>
            </Container>
        </S.Header>
    );
};

