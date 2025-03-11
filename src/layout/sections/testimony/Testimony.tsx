import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FLexWrapper direction={'column'}
                        aline={'center'}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>
                <Slider/>
            </FLexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #f3d7f3;
`

