import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

type WorkPropsType = {
    title: string
    text?: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat repudiandae voluptates odit laboriosam sapiente debitis molestiae. Quae dolorem expedita enim labore, soluta mollitia tempora est natus dolor sed iste.
            </Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background: yellow;
    max-width: 540px;
    width: 100%
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
// const Link = styled.a`
//
// `
const Title = styled.h4`

`
const Text = styled.p`

`