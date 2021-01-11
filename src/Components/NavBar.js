import React from 'react';
import { Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

const NavBar = props => {

    return (
        <>
        <Box bg="bioblue">
            <Link to="/">Home</Link>
        </Box>
        <Box bg="biogreen">
            <Link to="/projects">Projects</Link>
        </Box>
        </>
);
};

export default NavBar;