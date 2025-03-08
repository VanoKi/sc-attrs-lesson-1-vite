import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FLexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    // text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FLexWrapper direction="column" aline="center">
                <Icon iconId={props.iconId}></Icon>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore voluptatibus ab sapiente voluptate deserunt magnam omnis labore aperiam. Minima voluptatem expedita quia. Numquam natus autem blanditiis quam minima ea?</SkillText>
            </FLexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.h3`
    margin-top: 70px;
    margin-bottom: 15px;
`
const SkillText = styled.p`
    text-align: center;
`