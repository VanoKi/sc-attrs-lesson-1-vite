import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FLexWrapper wrap="wrap" justify="space-between">
                    <Skill iconId={'html'} title={'html5'}/>
                    <Skill iconId={'css'} title={'css'}/>
                    <Skill iconId={'react'} title={'react'}/>
                    <Skill iconId={'styledComponents'} title={'styled components'}/>
                    <Skill iconId={'ts'} title={'ts'}/>
                    <Skill iconId={'figma'} title={'figma'}/>
                </FLexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`