import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string
    // text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}></Icon>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore voluptatibus ab sapiente voluptate deserunt magnam omnis labore aperiam. Minima voluptatem expedita quia. Numquam natus autem blanditiis quam minima ea?</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: #f0b5bf;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`