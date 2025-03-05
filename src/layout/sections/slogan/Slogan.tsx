import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { FLexWrapper } from "../../../components/FlexWrapper"

export const Slogan = () => {
    return (
        <StyledSlogan>
            <FLexWrapper direction="column" aline="center">
                <SectionTitle>I Am Avaible For Freelance</SectionTitle>
                <Button>Hire Me</Button>
            </FLexWrapper>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: aqua;
`