import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {Theme} from "../styles/Theme.ts";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Slider} from "../components/slider/Slider.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FLexWrapper>
                    <Slider />
                </FLexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${Theme.colors.thirdBg};
`