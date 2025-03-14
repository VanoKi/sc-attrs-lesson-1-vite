import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import {Container} from "../../components/Container.tsx";
import {FLexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu.tsx";
import {MobileMenu} from "../mobileHeader/mobileMenu.tsx"

const items = ['Home', 'Skils', 'Works', 'Testimony', 'Contact',]
export const Header = () => {
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

const StyledHeader = styled.header`
    background-color: #1F1F20;
    padding: 20px 0;
    position: fixed;
    top: 0;left: 0;right: 0;
    z-index: 99;
`