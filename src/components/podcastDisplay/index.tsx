import { Box, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import React from "react";
import { lightTheme } from "../../themes";
import { ExpandMoreOutlined, NavigateNext } from "@mui/icons-material";
import { TALK_OF_TROY_DESCRIPTION } from "../../data";

const PodcastDisplay = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        };
    return (
        <Accordion sx={{width: "100%"}} expanded={expanded === 'panel1'} onChange={handleChange("panel1")}>
            <AccordionSummary sx={{background: lightTheme.primaryColor}} expandIcon={<ExpandMoreOutlined sx={{color: lightTheme.secondaryColor}}/>}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <h2 style={{
                    color: lightTheme.secondaryColor, 
                    whiteSpace: 'nowrap', 
                    marginRight: "2rem",
                    height: "fit-content"
                }}>Talk of Troy FC</h2>
            { expanded !== 'panel1' && 
            <p  style={{ 
                color: lightTheme.backgroundColor, 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                display: '-webkit-box', 
                WebkitBoxOrient: 'vertical', 
                WebkitLineClamp: 2
            }}>{TALK_OF_TROY_DESCRIPTION}</p>}
            </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{ margin: "1rem", display: "flex", flexFlow: "row wrap", gap: "1rem"}}>
                <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/show/7ipJaqfqreC974LvPWZJa0/video?utm_source=generator" width="300" height="200" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <Box>
                    <p style={{minWidth:"15rem", maxWidth: "25rem"}}>{TALK_OF_TROY_DESCRIPTION}</p>
                    <Button 
                        style={{color: lightTheme.primaryColor}}
                        href="https://open.spotify.com/show/7ipJaqfqreC974LvPWZJa0"
                        >
                        Check it out on Spotify 
                        <NavigateNext/>
                    </Button>
                </Box>
            </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default PodcastDisplay