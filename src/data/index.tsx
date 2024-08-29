import React from "react";
import { lightTheme } from "../themes";
import { 
    Facebook, 
    Instagram, 
    X,
    SportsFootball,
    SportsBaseball,
    SportsSoccer,
    SportsHockey,
    SportsVolleyball,
    SportsBasketball,
    Article,
    AudioFile,
    SportsBar,
    VolumeUp
} from "@mui/icons-material";
import { SocialMediaProps } from "../components/bioSection/socialMediaBar";
import { WorkLinkProps } from "../components/workSection";
import { BioSnippetProp } from "../components/bioSection/bioSnippets"

export const TALK_OF_TROY_DESCRIPTION: string = "Jack Hallinan, Ben Cohen and a rotating cast of guests discuss the wide world of soccer from their unique perspective as American fans of the world's game. They focus heavily on the Premier League, Champions League and other major soccer news with a lens that balances both deep analysis and a light, humorous touch."

export const BIO_SNIPPETS: BioSnippetProp[] = [
    { label: "University", value: "University of Southern California" },
    { label: "Degree", value: "B.A. Journalism" },
    { label: "Graduation", value: "May 2025" },
    { label: "Hometown", value: "Wilmette, IL" },
    { label: "University", value: "University of Southern California" },
    { label: "Degree", value: "B.A. Journalism" },
    { label: "Graduation", value: "May 2025" },
    { label: "Hometown", value: "Wilmette, IL" }
]

export const SOCIAL_MEDIA_LIST: SocialMediaProps[] = [
    { name: "Facebook", link: "https://www.youtube.com", icon: <Facebook sx={{color: lightTheme.primaryColor}}/> },
    { name: "X", link: "https://www.youtube.com", icon: <X sx={{color: lightTheme.primaryColor}}/> },
    { name: "Instagram", link: "https://www.youtube.com", icon: <Instagram sx={{color: lightTheme.primaryColor}}/> }
]

export const MY_WORK_LINKS: WorkLinkProps[] = [
    { name: "Something about an article", url: "https://youtube.com", icon: <SportsFootball/>},
    { name: "Something about an article 2", url: "https://youtube.com", icon: <SportsBar/>},
    { name: "Something about an article 3", url: "https://youtube.com", icon: <SportsVolleyball/>},
    { name: "Something about an article 4", url: "https://youtube.com", icon: <VolumeUp/>},
    { name: "Something about an article 5", url: "https://youtube.com", icon: <SportsBaseball/>},
    { name: "Something about an article 6", url: "https://youtube.com", icon: <SportsBasketball/>},
]