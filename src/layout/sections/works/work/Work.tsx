import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {Theme} from "../../../../styles/Theme.ts";

type WorkPropsType = {
    title: string
    text?: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Description>
                <Title>{props.title}</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat repudiandae voluptates odit laboriosam sapiente debitis molestiae. Quae dolorem expedita enim labore, soluta mollitia tempora est natus dolor sed iste.
                </Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StyledWork>
    );
};
const Description = styled.div`
    padding: 25px 20px;
`
const StyledWork = styled.div`
    background: ${Theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%
    ${Link} {
        //padding: 10px 0;
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h4`
`
const Text = styled.p`
    padding: 14px 0 10px;
    line-height: 1.4;
`