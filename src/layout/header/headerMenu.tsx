import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";


export const HeaderMenu = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
        );
    };

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
const ListItem = styled.li`
    position: relative;
`
const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 110%;
    text-align: center;
    color: #7572d5;
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