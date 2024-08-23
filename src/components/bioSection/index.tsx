import React from "react";
import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import BioSnippets from "./bioSnippets";
import SocialMediaBar from "./socialMediaBar";
import { lightTheme, screenSizes } from "../../themes";

const Container = styled(Paper)`
    display: flex;
    padding: 1rem;
    gap: 0.5rem 2rem;
    flex-direction: row-wrap;
    @media (max-width: ${ screenSizes.medium }) {
        flex-direction: column;
    }
`

const Headshot = styled.img`
    max-width: 10rem;
    max-height: 10rem;
    border: 0.1rem solid ${ lightTheme.primaryColor };
`

const InfoContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const BioSection = () => {
    return (
        <Container>
            <Headshot src="src/assets/Hallinan_Jack_Headshot.jpg" sizes="fluid"/>
            <InfoContainer>
                <Box sx={{display:"flex", alignItems: 'end', gap: "1rem", flexFlow:"wrap"}}>
                    <h1>Jack Hallinan</h1>
                    <SocialMediaBar/>
                </Box>
                <BioSnippets/>
            </InfoContainer>
        </Container>
    )
} 

export default BioSection