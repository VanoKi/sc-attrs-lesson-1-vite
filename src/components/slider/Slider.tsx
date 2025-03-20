import styled from "styled-components"
import { FLexWrapper } from "../FlexWrapper"
import { Theme } from "../../styles/Theme"
import clientFace from "../../assets/images/client_face.png"

export const Slider = () => {
    return (
        <StyledSlider>
            <FLexWrapper>
                <ClientFace>
                    <img src={clientFace} />
                </ClientFace>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore nostrum eligendi quaerat exercitationem unde optio dicta et, ducimus labore fuga quis pariatur voluptatibus incidunt excepturi modi ratione ad nihil.</Text>
                    <Pagination>
                        <span> </span>
                        <span className={`active`}> </span>
                        <span> </span>
                    </Pagination>
                </Slide>
            </FLexWrapper>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    //border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ClientFace = styled.div`
    //outline: yellow 1px solid;
    img {
        width: 390px;
        height: 390px;
        object-fit: cover;
    }
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
    margin: 22px 0 42px;
    display: block;
`
const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        & + span {
            margin-left: 5px;
        }
        &.active {
            background: ${Theme.colors.accent};
            width: 20px;
        }
    }
`