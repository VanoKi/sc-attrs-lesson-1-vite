import React from 'react';
import styled from "styled-components";
import {Button} from "../components/Button.tsx";
import {Icon} from "../components/icon/Icon.tsx";
import {Theme} from "../styles/Theme.ts";

export const Form = () => {
    return (
        <StyledForm>
            <Label htmlFor={'name'}>Your name:</Label>
            <Field id={'name'} type={'text'} />
            <Label htmlFor={'email'}>Your email  address:</Label>
            <Field id={'email'} type={'email'} />
            <Label htmlFor={'area'}> Tell about the project: </Label>
            <Field id={'area'} type={'text'} as={'textarea'} />
            <Button>
                Send
                <Icon iconId={'arrow-right'} />
            </Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    ${Button} {
        display: flex;
        justify-content: space-between;
        width: 147px;
        height: 36px;
        
        font-weight: 500;
        font-size: 30px;
        line-height: 120%;
        color: ${Theme.colors.accent};
    }
`
const Label = styled.label`
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
`
const Field = styled.input`
    background-color: transparent;
`