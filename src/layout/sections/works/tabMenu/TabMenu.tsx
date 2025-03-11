import styled from "styled-components";
import {Link} from '../../../../components/Link.tsx';

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
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
    }
`
const TabMenuItem = styled.li`
    position: relative;
    z-index: 0;
`
