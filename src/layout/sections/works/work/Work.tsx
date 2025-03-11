import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import { Button } from "../../../../components/Button.tsx";

type WorkPropsType = {
    title: string
    text?: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
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
        padding: 10px 0;
        & + ${Link} {
            margin-left: 20px;
    }
}
`
const ImageWrapper = styled.div`
    position: relative;
    &:hover {
        ${Button} {
            opacity: 1;
        }
        &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        }
    }
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        /* right: 50%; */
        top: 50%;
        /* bottom: 50%; */
        transform: translate(-50%, -50%);
        &::before {
            width: 100%;
            height: 100%;
        }
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
`
