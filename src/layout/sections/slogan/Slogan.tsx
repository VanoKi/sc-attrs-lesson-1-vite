import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { FLexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FLexWrapper direction="column" aline="center">
                    <SectionTitle>I Am Avaible For Freelance</SectionTitle>
                    <Button>Hire Me</Button>
                </FLexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: aqua;
`