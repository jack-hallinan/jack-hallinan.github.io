import React from "react";
import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import { screenSizes } from "../../themes";

const AboutMeSection = () => {
    return (
        <Box sx={{width: "100%", display:"flex", flexDirection:"column", gap: "0.5rem"}}>
            <h2>About Me</h2>
            <Divider/>
            <p style={{maxWidth: "50rem"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Box>
    )
}

export default AboutMeSection