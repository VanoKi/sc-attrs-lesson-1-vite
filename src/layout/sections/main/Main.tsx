import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/Sveta_1.webp";
import { FLexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FLexWrapper aline={'center'} justify={'space-around'}>
                <div>
                    <span>
                        Hi There
                    </span>
                    <h2>
                        I am Svetlana Dyablo
                    </h2>
                    <h1>
                        A Web Developer
                    </h1>
                </div>

                <Photo src={photo} alt="" />
            </FLexWrapper>

        </StyledMain>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMain = styled.div`
    min-height: 100vh;
`
const StyledTextBlock = styled.div`
    min-height: 100vh;
`