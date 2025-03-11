import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.ts";

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const TabMenu = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return (
                        <TabMenuItem key={index}>
                            <Link href="#">{item}</Link>
                        </TabMenuItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
const TabMenuItem = styled.li`
    position: relative;
`
const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px;
    &::before {
        background-color: ${Theme.colors.accent};
        content: '';
        display: inline-block;
        height: 10px;
        position: absolute;
        bottom: -5px;
        left: -10px;
        right: -10px;
    }
`