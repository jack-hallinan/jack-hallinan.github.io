import React from "react";
import styled from "@emotion/styled";
import { Box, Divider} from "@mui/material";
import { lightTheme } from "../../themes";

const Link = styled.a`
    color: ${lightTheme.primaryColor};
    &:hover {
        color: ${ lightTheme.primaryColor };
        text-decoration: underline;
    }
    &:focus {
        color: ${ lightTheme.primaryColor };
        textDecoration: underline;
    }
`

const AboutMeSection = () => {
    return (
        <Box sx={{width: "100%", display:"flex", flexDirection:"column", gap: "0.5rem"}}>
            <h2 style={{marginLeft: "1rem"}}>About Me</h2>
            <Divider/>
            <p style={{maxWidth: "50rem", marginLeft: "1rem"}}>
                I’m a multimedia journalist with professional interests that span across the sports, media and entertainment industries. My mission is to publish stories on digital platforms in audio, video and written formats that cover each of these fields and where they intersect. I’ve covered professional and collegiate sporting events, profiled athletes on the rise and hosted a live, video-first soccer podcast. My skill set is still growing and so is my desire to tackle these stories head-on.
            </p>
        </Box>
    )
}

export default AboutMeSection