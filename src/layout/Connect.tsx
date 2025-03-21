import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Icon} from "../components/icon/Icon.tsx";
import {Form} from "./Form.tsx";

export const Connect = () => {
    const items = ['basket', 'up', 'youtube', 'linkedin', 'git']
    return (
        <StyledConnect>
            <Container>
                <FLexWrapper justify={'space-between'}>
                    <Lets direction={'column'}>
                        <ConnectTitle>
                            Let’s<br/>
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
                    <Form />
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
    margin-bottom: 30px;
`
const Social = styled.ul`
    display: flex;
    gap: 50px;
    svg {
        transition: color 0.3s ease;
    }
    a:hover {
        color: ${Theme.colors.accent};
    }
`