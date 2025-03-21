import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Icon} from "../components/icon/Icon.tsx";

export const Connect = () => {
    const items = ['basket', 'up', 'youtube', 'linkedin', 'git']
    return (
        <StyledConnect>
            <Container>
                <FLexWrapper>
                    <Lets direction={'column'}>
                        <ConnectTitle>
                            Let’s
                            Connect
                        </ConnectTitle>
                        <Social>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <Icon iconId={item} />
                                    </a>
                                </li>
                            ))}
                        </Social>
                    </Lets>
                </FLexWrapper>
            </Container>
        </StyledConnect>
    );
};

const StyledConnect = styled.section`
    background-color: ${Theme.colors.secondaryBg};
`
const Lets = styled(FLexWrapper)``
const ConnectTitle = styled.h2`
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
`
const Social = styled.ul`
    display: flex;
    gap: 50px;
`