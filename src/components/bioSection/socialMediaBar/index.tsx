import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Box, IconButton, List, ListItem, ListItemText, Paper, Tooltip } from "@mui/material";
import { SOCIAL_MEDIA_LIST } from "../../../data";

export interface SocialMediaProps {
    name: string,
    link: string,
    icon: ReactNode
}

const SocialMediaButton = (props: SocialMediaProps) => {
    return (
        <Tooltip title={props.name}>
            <IconButton href={props.link}>
                {props.icon}
            </IconButton>
        </Tooltip>
    )
}

const SocialMediaBar = () => {
    return (
        <Box sx={{ display: "flex", alignItems: 'center', textAlign: 'center'}}>
            {
                SOCIAL_MEDIA_LIST.map((socialMediaInfo: SocialMediaProps) =>(
                    <SocialMediaButton key={socialMediaInfo.name} {...socialMediaInfo}/>
                ))
            }
        </Box>
    )
}

export default SocialMediaBar