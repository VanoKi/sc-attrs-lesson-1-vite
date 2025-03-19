import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Menu} from "../components/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FLexWrapper justify={'space-between'} align={'center'}>
                    <a href="#">
                        Logo
                    </a>
                    <Menu />
                    <button>Contact Me</button>
                </FLexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header``
