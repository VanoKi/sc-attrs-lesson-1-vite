import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { FLexWrapper } from "../../../components/FlexWrapper"

export const Footer = () => {
    return (
        <StyledFooter>
            <FLexWrapper direction="column"
                            aline="center">
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
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FLexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #cdcdcd;
    min-height: 20vh;
`
const Name = styled.span`
`
const SocialIconsList = styled.ul`
    display: flex;
    flex-direction: row;
`
const SocialIconsListItem = styled.li`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`