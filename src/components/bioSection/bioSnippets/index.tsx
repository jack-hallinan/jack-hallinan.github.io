import React from "react";
import styled from "@emotion/styled";
import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import { screenSizes } from "../../../themes";
import { BIO_SNIPPETS } from "../../../data";

const Container = styled(List)`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;

const CustomListItem = styled(ListItem)`
    width: 50%;
    flex-direction: column;
    padding: 0 1rem 0 0;
    @media (max-width: ${ screenSizes.small }) {
        width: 100%;
    }
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

    @media (max-width: ${ screenSizes.small }) {
        padding: 0.1rem;
    }
`

export interface BioSnippetProp {
    label: string,
    value: string,
    topDivider?: boolean
}

const BioSnippet = (props: BioSnippetProp) => {
    return (
        <CustomListItem>
            {props.topDivider && <CustomDivider/>}
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
            { BIO_SNIPPETS
            .map((bioSnippetData: BioSnippetProp, index: number) => (
                <BioSnippet key={index} topDivider={index < 2} {...bioSnippetData}/>
            ))}
        </Container>
    )
}

export default BioSnippets
