import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background : linear-gradient(50deg,rgb(244, 238, 169)50%,rgb(240, 187, 98)50%);
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Wrapper = styled.div`
background-color : white;
width : 40%;
padding : 10px 5px 10px 5px;
border-radius : 12px;
`;

const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
    margin-left : 3px;
`

const Form = styled.form `
    display : flex;
    flex-wrap : wrap;
`

const Input = styled.input`
    flex : 1;
    min-width : 40%;
    margin : 10px 5px 10px 5px;
    padding : 10px;
`;
const Button = styled.button`
    width : 350px;
    height : 40px;
    background-color :rgb(6, 70, 53);
    border : none;
    border-radius : 12px;
    color : white;
    margin : auto;
    font-size : 20px;
`;

const Login = () => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <Title>Login</Title>
                    <Form>
                        <Input placeholder="Username" />
                        <Input  placeholder="Password" />
                        <Button type="submit">Login</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Login;
