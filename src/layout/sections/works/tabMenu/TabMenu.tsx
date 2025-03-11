import styled from "styled-components";

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
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
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