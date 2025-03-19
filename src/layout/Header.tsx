import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Menu} from "../components/Menu.tsx";
import {Theme} from "../styles/Theme.ts";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FLexWrapper justify={'space-between'} align={'center'}>
                    <Logo href="#">
                        Logo
                    </Logo>
                    <Menu />
                    <Btn>Contact Me</Btn>
                </FLexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: transparent;
    position: sticky;
    top: 60px;
    z-index: 9;
`
const Btn = styled.button`
    width: 157px;
    height: 50px;
    padding: 10px 20px;
    background-color: ${Theme.colors.accent};
    font-weight: 500;
    font-size: 20px;
`
const Logo = styled.a`
    font-weight: 700;
    font-size: 30px;
    padding: 10px;
`
