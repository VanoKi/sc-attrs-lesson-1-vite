import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";


export const MobileMenu = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton>
                <span></span>
            </BurgerButton>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                                <Link href="#">
                                    {item}
                                    <Mask><span>{item}</span></Mask>
                                    <Mask><span>{item}</span></Mask>
                                </Link>
                            </ListItem>
                })}
            </ul>
        </StyledMobileMenu>
        );
    };

const StyledMobileMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
     @media ${Theme.media.tablet} {
         display: none;
     }
`
const BurgerButton = styled.button`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    span {
        display: block;
        width: 36px;
        height: 2px;
        color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
        }
        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);
        }
    }
`
const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 110%;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    outline: 1px solid red;
    color: ${Theme.colors.accent};
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }
    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translatex(5px);
            color: ${Theme.colors.font};
        }
        & + ${Mask} {
            transform: skewX(12deg) translatex(-5px);
        }
    }
`