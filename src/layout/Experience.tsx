import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import {Theme} from "../styles/Theme.ts";
import {Icon} from "../components/icon/Icon.tsx";

export const Experience = () => {
    const icons = ['frontEnd', 'UIUX', 'Branding']
    const titles = ['Front End Developer', 'UI/UX Designer', 'Branding Designer']
    return (
        <StyledExperience>
            <GridItems>
                <Number>
                    <p>4+</p>
                </Number>
                <Title as={'h2'}>
                    Developer and Designer, specialized in
                    UI/UX and Web Developer
                </Title>
                <Merit>
                    <p>Years</p>
                    <p>Experience</p>
                    <p>Working</p>
                </Merit>
                <Roles>
                    {icons.map((item, index) => (
                        <RolesItem  key={index}>
                            <RolesItemContent>
                                <Icon iconId={item}/>
                                <RolesItemContentTitle>{titles[index]}</RolesItemContentTitle>
                            </RolesItemContent>
                        </RolesItem>
                    ))}
                </Roles>
            </GridItems>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
`
const GridItems = styled(Container)`
    display: grid;
    grid-template-columns: 290px 1fr;
    grid-template-rows: auto 295px;
`
const GridItem = styled.div`
    outline: yellowgreen;
`
const Number = styled(GridItem)`
    display: flex;
    justify-content: start;
    align-items: end;
    p {
        font-weight: 700;
        font-size: 100px;
        line-height: 120%;
        color: ${Theme.colors.accent};
    }
`
const Title = styled(GridItem)`
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
    text-align: center;
    margin-bottom: 20px;
`
const Merit = styled(GridItem)`
    p {
        font-weight: 700;
        font-size: 40px;
        line-height: 180%;
    }
`
const Roles = styled(GridItem)`
    display: flex;
    gap: 15px;
`

const RolesItemContent = styled.div`
    width: 106px;
    height: 86px;
`
const RolesItemContentTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: ${Theme.colors.thirdBg};
    transition: color 0.3s ease;
`
const RolesItem = styled.div`
    width: 288px;
    height: 295px;
    padding: 35px 30px;
    background: ${Theme.colors.default};
    display: flex;
    justify-content: start;
    align-items: end;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background: ${Theme.colors.accent};
        ${RolesItemContentTitle} {
            color: #fff;
        }
    }
`