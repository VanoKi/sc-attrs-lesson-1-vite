import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
                <Container>
                    <FLexWrapper justify={'center'}>
                        <FooterContent>
                            Created by&nbsp;
                            <span>Zarror</span>
                            &nbsp;| All Reserved!
                        </FooterContent>
                    </FLexWrapper>
                </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.secondaryBg};
`
const FooterContent = styled.small`
    font-weight: 500;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    span {
        color: ${Theme.colors.font};
    }
`