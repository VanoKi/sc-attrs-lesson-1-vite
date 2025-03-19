import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <p>Hello!</p>
                <p>I’m Zarror Nibors</p>
                <p>
                    I’am freelance
                    <h1>web developer </h1>
                    based in Indonesia who loves to craft attractive design experiences for the web.
                </p>
                <FLexWrapper>

                </FLexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin: 0 auto;
    max-width: 1440px;
        h1 {
            display: inline;
        }
`