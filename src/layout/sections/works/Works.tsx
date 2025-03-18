import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu.tsx";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png";
import timerImg from "./../../../assets/images/proj2.png";
import { Container } from "../../../components/Container";

const worksItems = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <FLexWrapper justify={'center'}>
                    <TabMenu menuItems={worksItems}/>
                </FLexWrapper>
                <FLexWrapper justify={'space-between'} aline="flex-start" wrap={'wrap'}>
                    <Work title={'Social Network'}
                            src={socialImg}/>
                    <Work title={'Timer'}
                            src={timerImg}/>
                </FLexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: #d9f2fb;
`