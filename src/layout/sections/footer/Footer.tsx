import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Svetlana</Name>
            <SocialIconsList>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon iconId={'insta'}></Icon>
                    </SocialIconLink>
                </SocialIconsListItem>
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
const SocialIconsListItem = styled.li`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`