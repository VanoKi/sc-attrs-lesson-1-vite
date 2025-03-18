import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import React, {useState} from "react";
import {Menu} from "../header/menu/Menu.tsx";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {
    menuItems: Array<string>
}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => { setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems} />
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${Theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999;
    ${props => props.isOpen && css<{isOpen: boolean}>`
        color: rgba(255, 255, 255, 0);    
    `}
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);    
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0px);
            `}
        }
        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0px);
                width: 36px;
            `}
        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 99;
    background: rgba(31, 31, 32, 0.9);
    display: none;
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
    }
`
