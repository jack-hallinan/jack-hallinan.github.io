import React, { ReactNode } from "react";
import { Box, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { lightTheme } from "../../themes";
import { EXPERIENCES } from "../../data";

export interface ExperienceProps {
    company: string,
    position: string
    url?: string,
    duration: string,
    description?: string
}

const Wrapper = ({url, children}: {url?: string, children: ReactNode}) => {
    if (!!url) return (
    <ListItemButton 
        href={url}
        sx={{
            color: 'black',
            '&:hover': {
                color: lightTheme.primaryColor,
            },
            flexDirection: "column",
            alignItems: 'start'}}>
        {children}
    </ListItemButton>
    ) 
    else return (
    <ListItem
        sx={{
            color: 'black',
            flexDirection: "column",
            alignItems: 'start'}}>
        {children}
    </ListItem>
    )
}

const ExperienceInfo = (props: ExperienceProps) => {
    return (
        <Wrapper url={props.url}>
            <ListItem sx={{alignItems:'start', padding: "0"}}>
                <ListItemText primary={props.company} secondary={props.position}/>
                <p style={{fontSize: "1rem", fontWeight:"normal", textAlign: "right"}}>{props.duration}</p>
            </ListItem>
            <Divider/>
            { props.description &&
            <Divider/> &&
            <p style={{
                fontWeight: "400",
                fontSize: "0.875rem",
                color: "rgba(0, 0, 0, 0.6)"}}>{props.description}</p>}
        </Wrapper>
    )
}

const ExperienceSection = () => {
    return (
        <Box sx={{width: "100%", display:"flex", flexDirection:"column", gap: "0.5rem"}}>
            <h2 style={{marginLeft: "1rem"}}>My Experience</h2>
            <Divider/>
            <Box sx={{width: "100%", display:"flex", flexDirection:"column"}}>
            {
                EXPERIENCES.map(props => <ExperienceInfo {...props}/>)
            }
            </Box>
        </Box>
    )
}

export default ExperienceSection