import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FLexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FLexWrapper direction={'column'}
                        aline={'center'}>
                <Icon iconId={'qioute'}/>
                <Slider/>
            </FLexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: violet;
`

