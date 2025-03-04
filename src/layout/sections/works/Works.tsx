import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png";
import timerImg from "./../../../assets/images/proj2.png";

const worksItems = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FLexWrapper justify={'space-around'}>
                <Work title={'Social Network'}
                        src={socialImg}/>
                <Work title={'Timer'}
                        src={timerImg}/>
            </FLexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: lightblue;
`