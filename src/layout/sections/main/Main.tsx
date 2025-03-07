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
                    <Name>
                        I am Svetlana Dyablo
                    </Name>
                    <MainTitle>
                        A Web Developer
                    </MainTitle>
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

const StyledMain = styled.section`
    /* min-height: 100vh; */
    background-color: #f8f891;
`

const MainTitle = styled.h1`
    
`
const Name = styled.h2`

`