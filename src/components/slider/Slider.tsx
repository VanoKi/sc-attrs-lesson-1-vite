import styled from "styled-components"
import { FLexWrapper } from "../FlexWrapper"

export const Slider = () => {
    return (
        <StyledSlider>
            <FLexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore nostrum eligendi quaerat exercitationem unde optio dicta et, ducimus labore fuga quis pariatur voluptatibus incidunt excepturi modi ratione ad nihil.</Text>
                    <Name>@Vasya Vasilevski</Name>
                </Slide>
            </FLexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;

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
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: deeppink;
    }
`