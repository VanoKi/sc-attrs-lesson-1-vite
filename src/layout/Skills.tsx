import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Icon} from "../components/icon/Icon.tsx";

export const Skills = () => {
    const items = ['figma', 'html', 'css', 'sass', 'react']
    return (
        <StyledSkills>
            <Container>
                <FLexWrapper>
                    {items.map((item, index) => (
                            <IconWrap key={index}>
                                <Icon iconId={item}  height={'100%'} width={'100%'} viewBox={'0 0 100 100'}/>
                            </IconWrap>
                    ))}
                </FLexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background: ${Theme.colors.secondaryBg};
    ${FLexWrapper} {
        gap: 170px;
    }
`
const IconWrap = styled.div`
    width: 100px;height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`