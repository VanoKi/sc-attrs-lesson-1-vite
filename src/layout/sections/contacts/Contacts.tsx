import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field placeholder={'message'} as={'textarea'} />
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    width: 100%;
    background: ${Theme.colors.secondaryBg};
    border: 1px solid #4a4a4a;
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    /* color: #495057; */
    color: ${Theme.colors.font};
`