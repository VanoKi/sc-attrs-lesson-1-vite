import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Icon} from "../components/icon/Icon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FLexWrapper>
                    <IconWrap>
                        <Icon iconId={'figma'}/>
                    </IconWrap>
                </FLexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background: ${Theme.colors.secondaryBg};
`
const IconWrap = styled.div`
    
`