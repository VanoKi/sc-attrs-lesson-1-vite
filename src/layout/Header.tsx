import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Menu} from "../components/Menu.tsx";
import {Theme} from "../styles/Theme.ts";
import {Button} from "../components/Button.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FLexWrapper justify={'space-between'} align={'center'}>
                    <Logo href="#">
                        Logo
                    </Logo>
                    <Menu />
                    <BtnHeader as={'a'}>Contact Me</BtnHeader>
                </FLexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding-top: 10px;
    background: transparent;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 65px;
    z-index: 9;
`
const BtnHeader = styled(Button)`
    width: 157px;
    height: 50px;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 20px;
`
const Logo = styled.a`
    font-weight: 700;
    font-size: 30px;
    padding: 10px;
`
