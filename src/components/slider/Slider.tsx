import styled from "styled-components"
import { FLexWrapper } from "../FlexWrapper"
import { Theme } from "../../styles/Theme"
import clientFace from "../../assets/images/client_face.png"
import {Icon} from "../icon/Icon.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FLexWrapper>
                <ClientFace>
                    <img src={clientFace} />
                </ClientFace>
                <Slide>
                    <Quete>“</Quete>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore nostrum eligendi quaerat exercitationem unde optio dicta et, ducimus labore fuga quis pariatur voluptatibus incidunt excepturi modi ratione ad nihil.</Text>
                    <Pagination>
                        <Icon iconId={'arrow-left'}/>
                        <Icon iconId={'arrow-right'}/>
                    </Pagination>
                </Slide>
                <Satisfaction direction={'column'}>
                    <p>Satisfaction
                        Clients</p>
                    <p>100 %</p>
                    <p>Clients On Worldwide</p>
                    <p>+ 80</p>
                    <p>Projects Done</p>
                    <p>743</p>
                </Satisfaction>
            </FLexWrapper>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    //border: 1px solid red;
    //max-width: 500px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
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
const Quete = styled.span`
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
    color: #c4c4c4;
`
const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
`
const Pagination = styled.span`

`
const Satisfaction = styled(FLexWrapper)`
    
`