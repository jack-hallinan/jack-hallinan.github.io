import React from "react";
import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import BioSnippets from "./bioSnippets";
import SocialMediaBar from "./socialMediaBar";
import { lightTheme, screenSizes } from "../../themes";
import { SportsFootball } from "@mui/icons-material";

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

const Name = styled.h1`
    @media (max-width: ${ screenSizes.small }) {
        font-size: 2.2rem;
    }
`

const BioSection = () => {
    return (
        <Container>
            <Headshot src="src/assets/Hallinan_Jack_Headshot.jpg" sizes="fluid"/>
            <InfoContainer>
                <Box sx={{display:"flex", alignItems: 'end', gap: "0 1rem", flexFlow:"wrap"}}>
                    <Name>Jack Hallinan</Name>
                    <SocialMediaBar/>
                </Box>
                <BioSnippets/>
            </InfoContainer>
        </Container>
    )
} 

export default BioSection