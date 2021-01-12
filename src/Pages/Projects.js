import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from 'react-relay';
import { Container } from "@chakra-ui/react"
import NavBar from '../Components/NavBar';
import environment from '../relay-environment';

const Projects = props => {

    return (
        <QueryRenderer
        environment={environment}
        query={graphql`
            query ProjectsQuery {
                allProjects {
                    nodes {
                        projectid
                        name
                        budget
                    }
                }
            }
          `}
        render={renderQuery}
      />
      );
};

const renderQuery = ({error, props}) => {
    console.log(props);
    if (error || props === undefined) {
      return (
        <>
            <NavBar></NavBar>
            <Container>
                Error loading projects!
            </Container>
        </>
      );
    } else if (props) return (
        <>
            <NavBar></NavBar>
            <Container>
                {props.allProjects.nodes.map(proj => (
                    <Container>
                        ID: {proj.projectid}<br/>
                        Name: {proj.name}<br/>
                        Budget: {proj.budget}<br/>
                    </Container>
                ))}
            </Container>
        </>
    )
    return <div>Loading...</div>;
}  

export default Projects;