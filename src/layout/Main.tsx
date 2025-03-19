import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import faceImg from '../../src/assets/images/face.png'

export const Main = () => {
    return (
        <StyledMain>
            <FLexWrapper align={'center'}>
                <ContentArea>
                    <FLexWrapper direction={'column'} align={'flex-start'}>
                        <span>Hello!</span>
                        <span>I’m Zarror Nibors</span>
                        <p>
                            I’am freelance
                            <h1>web developer </h1>
                            based in Indonesia who loves to craft attractive design experiences for the web.
                        </p>
                    </FLexWrapper>
                    <FLexWrapper>

                    </FLexWrapper>
                </ContentArea>
                <ImageArea>
                    <img src={faceImg} alt={'face'}/>
                </ImageArea>
            </FLexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    ${FLexWrapper} {
        position: relative;
    }
`
const ContentArea = styled.div`
    //flex: 1;
    //padding: 20px;
    margin-left: 118px;
    position: relative;
    z-index: 1;
    text-align: left;
    span {
        font-weight: 700;
        font-size: 90px;
        line-height: 120%;
    }
    h1 {
        display: inline;
    }
    p, h1 {
        font-weight: 400;
        font-size: 20px;
        line-height: 180%;
    }
`
const ImageArea = styled.div`
    //flex: 1;
    //overflow: hidden;
    position: absolute;
    z-index: 0;
    img {
        width: 721px;
        height: 743px;
        object-fit: cover;
    }
`