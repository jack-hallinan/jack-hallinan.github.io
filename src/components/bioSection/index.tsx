import React from "react";
import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import BioSnippets from "./bioSnippets";
import SocialMediaBar from "./socialMediaBar";

const Container = styled(Paper)`
    display: flex;
    width: 80%;
    padding: 1rem;
`
const InfoContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 70%;
`

const BioSection = () => {
    return (
        <Container>
            <div>Image</div>
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