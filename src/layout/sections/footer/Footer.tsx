import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Svetlana</Name>
            <SocialIconsList>
                <SocialIconLink>
                    <Icon iconId={'insta'}></Icon>
                </SocialIconLink>
            </SocialIconsList>
            <Copyright></Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
`
const Name = styled.span`
`
const SocialIconsList = styled.ul`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`