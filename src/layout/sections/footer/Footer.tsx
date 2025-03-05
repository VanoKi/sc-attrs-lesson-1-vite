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
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon iconId={'telegram'}></Icon>
                    </SocialIconLink>
                </SocialIconsListItem>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon iconId={'vk'}></Icon>
                    </SocialIconLink>
                </SocialIconsListItem>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon iconId={'linkedin'}></Icon>
                    </SocialIconLink>
                </SocialIconsListItem>
            </SocialIconsList>
            <Copyright></Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #cdcdcd;
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