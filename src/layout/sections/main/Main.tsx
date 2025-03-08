import styled from "styled-components";
import photo from "./../../../assets/images/Sveta_1.webp";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FLexWrapper aline={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>
                            Hi There
                        </SmallText>
                        <Name>
                            I am <span>Svetlana Dyablo</span>
                        </Name>
                        <MainTitle>
                            A Web Developer
                        </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FLexWrapper>

            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #f8f891;
    display: flex;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`
const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 0;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -24px;
        left: 24px;
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
    }
`