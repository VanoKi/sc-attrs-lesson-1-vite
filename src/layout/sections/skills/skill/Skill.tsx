import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"html"}></Icon>
            <SkillTitle>HTML5</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore voluptatibus ab sapiente voluptate deserunt magnam omnis labore aperiam. Minima voluptatem expedita quia. Numquam natus autem blanditiis quam minima ea?</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`
const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`