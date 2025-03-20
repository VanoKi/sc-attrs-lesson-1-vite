import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FLexWrapper} from "../components/FlexWrapper.tsx";
import faceImg from '../../src/assets/images/face.png'
import {Button} from "../components/Button.tsx";
import {Icon} from "../components/icon/Icon.tsx";

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
                            <h1> web developer </h1>
                            based in Indonesia who loves to craft attractive design experiences for the web.
                        </p>
                    </FLexWrapper>
                    <FLexWrapper>
                        <BtnMain>
                            <Icon iconId={'email'} />
                            Email me
                        </BtnMain>
                        <DownloadCv as={'a'} >
                            <Icon iconId={'download'}/>
                            Download CV
                        </DownloadCv>
                    </FLexWrapper>
                </ContentArea>
                <ImageArea>
                    <img src={faceImg} alt={'face'}/>
                </ImageArea>
            </FLexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin: 0 auto;
    max-width: 1440px;
    height: 743px;
    position: relative;
`
const ContentArea = styled.div`
    outline: yellowgreen 1px solid;
    position: absolute;
    top: 175px;
    left: 118px;
    z-index: 1;
    text-align: left;
    span {
        font-weight: 700;
        font-size: 90px;
        line-height: 120%;
    }
    h1 {
        display: inline;
        color: #fff;
    }
    p, h1 {
        font-weight: 400;
        font-size: 20px;
        line-height: 180%;
    }
    p {
        max-width: 404px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 30px;
    }
`
const ImageArea = styled.div`
    outline: yellow 1px solid;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    img {
        width: 721px;
        height: 743px;
        object-fit: cover;
    }
`
const BtnMain = styled(Button)`
    width: 203px;
    height: 64px;
    padding: 20px 34px;
    display: flex;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
`
const DownloadCv = styled(BtnMain)`
    width: 235px;
    background: transparent;
    padding: 10px 20px;
    line-height: 47px;
    text-decoration: underline;
`