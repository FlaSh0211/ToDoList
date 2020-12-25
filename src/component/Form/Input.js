import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid black;
`

const Form = styled.input`
    outline: 0px;
    border: 0px;
    border-bottom: 1px;
    width: 80%;
    height: 30%;
    font-size: 0.8rem;
`;


const Input = (props)=> {
    const { placeholder, id } = {...props};
    return(
        <FormWrapper>
            <span style={{marginBottom: "15px"}}>채팅방 이름</span>
            <Form placeholder={placeholder} id={id} type={"text"} />
        </FormWrapper>
    )
}

export default Input;