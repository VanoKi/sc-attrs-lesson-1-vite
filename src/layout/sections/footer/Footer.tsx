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
                            <Icon iconId={'insta'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}></Icon>
                        </SocialIconLink>
                    </SocialIconsListItem>
                    <SocialIconsListItem>
                        <SocialIconLink>
                            <Icon iconId={'telegram'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}></Icon>
                        </SocialIconLink>
                    </SocialIconsListItem>
                    <SocialIconsListItem>
                        <SocialIconLink>
                            <Icon iconId={'vk'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}></Icon>
                        </SocialIconLink>
                    </SocialIconsListItem>
                    <SocialIconsListItem>
                        <SocialIconLink>
                            <Icon iconId={'linkedin'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}></Icon>
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
    gap: 30px;
`
const SocialIconsListItem = styled.li`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`