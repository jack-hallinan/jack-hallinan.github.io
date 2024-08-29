import React, { ReactNode } from "react";
import { Box, Divider, List, ListItemButton } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { lightTheme } from "../../themes";
import { MY_WORK_LINKS } from "../../data";

export interface WorkLinkProps {
    name: string,
    url: string,
    icon: ReactNode
}

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
                    MY_WORK_LINKS.map((props: WorkLinkProps) => (
                        <WorkItem {...props}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default WorkSection