import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Box, IconButton, List, ListItem, ListItemText, Paper, Tooltip } from "@mui/material";
import { lightTheme, screenSizes } from "../../../themes";
import { Facebook, FacebookRounded, Instagram, X } from "@mui/icons-material";

interface SocialMediaProps {
    name: string,
    link: string,
    icon: ReactNode
}

const socialMedia: SocialMediaProps[] = [
    { name: "Facebook", link: "https://www.youtube.com", icon: <Facebook sx={{color: lightTheme.primaryColor}}/> },
    { name: "X", link: "https://www.youtube.com", icon: <X sx={{color: lightTheme.primaryColor}}/> },
    { name: "Instagram", link: "https://www.youtube.com", icon: <Instagram sx={{color: lightTheme.primaryColor}}/> }
]

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
                socialMedia.map((socialMediaInfo: SocialMediaProps) =>(
                    <SocialMediaButton key={socialMediaInfo.name} {...socialMediaInfo}/>
                ))
            }
        </Box>
    )
}

export default SocialMediaBar