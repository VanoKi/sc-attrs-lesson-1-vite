import { Logo } from "../../components/logo/Logo";
import {Container} from "../../components/Container.tsx";
import {FLexWrapper} from "../../components/FlexWrapper.tsx";
import {DesktopMenu} from "./DesktopMenu.tsx";
import {MobileMenu} from "../mobileHeader/mobileMenu.tsx"
import React from "react";
import {S} from "./Header_Styles.ts";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    return (
        <S.Header>
            <Container>
                <FLexWrapper justify={'space-between'} aline={'center'}>
                    <Logo />
                    {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                </FLexWrapper>
            </Container>
        </S.Header>
    );
};

