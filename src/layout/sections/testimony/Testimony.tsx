import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Icon iconId={'qioute'}/>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: violet;
`

