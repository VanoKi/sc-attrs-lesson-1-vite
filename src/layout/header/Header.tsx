import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import {Contacts} from "../sections/contacts/Contacts.tsx";
import {Container} from "../../components/Container.ts";
import {FLexWrapper} from "../../components/FlexWrapper.tsx";

const items = ['Home', 'Skils', 'Works', 'Testimony', 'Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FLexWrapper justify={'space-between'} aline={'center'}>
                    <Logo />
                    <Menu menuItems={items}/>
                </FLexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #dfffaf;
    display: flex;
    justify-content: space-between;
`