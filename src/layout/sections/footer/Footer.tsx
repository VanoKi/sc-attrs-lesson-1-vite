import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { FLexWrapper } from "../../../components/FlexWrapper"
import {Theme} from "../../../styles/Theme.ts";

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
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    //letter-spacing: 0.14em;
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
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`