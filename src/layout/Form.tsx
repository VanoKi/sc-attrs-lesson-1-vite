import React from 'react';
import styled from "styled-components";

export const Form = () => {
    return (
        <StyledForm>
            <Label>Your name:</Label>
            <Field />
            <Label>Your email  address:</Label>
            <Field />
            <Label> Tell about the project: </Label>
            <Field as={'textarea'} />
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
`
const Field = styled.input``