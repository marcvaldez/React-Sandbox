import React from 'react';
import { Container } from "@chakra-ui/react"
import NavBar from '../Components/NavBar'

const Home = props => {

    return (
        <>
            <NavBar></NavBar>
            <Container>
                Hello World!
            </Container>
        </>
    );
};

export default Home;