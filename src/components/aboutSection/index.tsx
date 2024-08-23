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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <Link href="youtube.com">aliquip ex ea commodo consequat</Link>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <Link href="youtube.com">cupidatat non proident</Link>, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Box>
    )
}

export default AboutMeSection