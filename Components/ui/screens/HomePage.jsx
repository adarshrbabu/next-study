import Head from "next/head";
import styled from "styled-components";
import React, { Fragment, useRef } from "react";
import helo from "../../../assets/images/helo.jpeg";
import Image from "next/image";

function HomePage() {
    const emailRef = useRef();
    const feedBackRef = useRef();
    const EmailValue = emailRef.current?.value;
    const feedbacklValue = feedBackRef.current?.value;

    const FormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            <Container>
                <Img src={helo} alt="helo" />
            </Container>
            <Form onSubmit={FormSubmit}>
                <label htmlFor="email">Enter your email</label>
                <br />
                <input type="email" ref={emailRef} />
                <hr /> <label htmlFor="feedback">Enter your feedback</label>
                <br />
                <input type="text" ref={feedBackRef} />
                <br />
                <button>Submit</button>
            </Form>
        </Fragment>
    );
}

export default HomePage;
const Container = styled.div`
    margin-top: 30px;
    width: 500px;
`;
const Img = styled(Image)`
    width: 100%;
    height: 100%;
`;
const Form = styled.form`
    margin-top: 50px;
`;
