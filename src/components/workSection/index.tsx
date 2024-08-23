import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Box, Divider, List, ListItemButton } from "@mui/material";
import { ArrowRightAltRounded, Article, NavigateNext, SportsBaseball, SportsBasketball, SportsFootball, SportsHockey, SportsVolleyball } from "@mui/icons-material";
import { lightTheme } from "../../themes";

interface WorkLinkProps {
    name: string,
    url: string,
    icon: ReactNode
}

const workLinks: WorkLinkProps[] = [
    { name: "Something about an article", url: "youtube.com", icon: <SportsFootball/>},
    { name: "Something about an article 2", url: "youtube.com", icon: <SportsHockey/>},
    { name: "Something about an article 3", url: "youtube.com", icon: <SportsVolleyball/>},
    { name: "Something about an article 4", url: "youtube.com", icon: <Article/>},
    { name: "Something about an article 5", url: "youtube.com", icon: <SportsBaseball/>},
    { name: "Something about an article 6", url: "youtube.com", icon: <SportsBasketball/>},
]


const WorkItem = (props: WorkLinkProps) => {
    return (
        <ListItemButton
            sx={{
                color: 'black', // Default text color
                '&:hover': {
                    color: lightTheme.primaryColor, // Hover text color
                },
                gap: "1rem"
            }}
        >
            {props.icon}
            {props.name}
            <NavigateNext/>
        </ListItemButton>
    )
}

const WorkSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <h2 style={{marginLeft: "1rem"}}>My Work</h2>
            <Divider style={{marginTop: "0.5rem"}}/>
            <List>
                {
                    workLinks.map((props: WorkLinkProps) => (
                        <WorkItem {...props}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default WorkSection