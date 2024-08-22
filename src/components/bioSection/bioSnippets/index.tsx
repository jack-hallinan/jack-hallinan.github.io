import React from "react";
import styled from "@emotion/styled";
import { Box, Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import { screenSizes } from "../../../themes";

const Container = styled(List)`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;

const CustomListItem = styled(ListItem)`
    width: 50%;
    flex-direction: column;
    padding: 0 1rem 0 0;
`
const CustomDivider = styled(Divider)`
    width: 100%;
    flex: 0;
`

const TextField = styled.div`
    width: 100%;
    display: flex;
    gap: 0 0.5rem;
    padding: 0.5rem;
    flex: 1;
    flex-direction: row-wrap;
    @media (max-width: ${ screenSizes.large }) {
        flex-direction: column;
    }
`

export interface BioSnippetProp {
    label: string,
    value: string
}

const bioSnippets: BioSnippetProp[] = [
    { label: "University", value: "University of Southern California" },
    { label: "Degree", value: "B.A. Journalism" },
    { label: "Graduation", value: "May 2025" },
    { label: "Hometown", value: "Wilmette, IL" },
    { label: "University", value: "University of Southern California" },
    { label: "Degree", value: "B.A. Journalism" },
    { label: "Graduation", value: "May 2025" },
    { label: "Hometown", value: "Wilmette, IL" }
]

const BioSnippet = (props: BioSnippetProp) => {
    return (
        <CustomListItem>
            <TextField>
                <h6>{`${props.label}:`}</h6>
                <p>{props.value}</p>
            </TextField>
            <CustomDivider/>
        </CustomListItem>
    )
}

const BioSnippets = () => {
    return(
        <Container>
                { bioSnippets
                .map((bioSnippetData: BioSnippetProp, index: number) => (
                    <BioSnippet key={bioSnippetData.label} {...bioSnippetData}/>
                ))}
        </Container>
    )
}

export default BioSnippets
