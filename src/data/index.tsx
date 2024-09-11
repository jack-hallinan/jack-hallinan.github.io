import React from "react";
import { lightTheme } from "../themes";
import SpotifyIcon from "../assets/spotify";
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
    LinkedIn,
    SportsBar,
    VolumeUp,
    Movie
} from "@mui/icons-material";
import { SocialMediaProps } from "../components/bioSection/socialMediaBar";
import { WorkLinkProps } from "../components/workSection";
import { BioSnippetProp } from "../components/bioSection/bioSnippets"

export const TALK_OF_TROY_DESCRIPTION: string = "Jack Hallinan, Ben Cohen and a rotating cast of guests discuss the wide world of soccer from their unique perspective as American fans of the world's game. They focus heavily on the Premier League, Champions League and other major soccer news with a lens that balances both deep analysis and a light, humorous touch."

export const BIO_SNIPPETS: BioSnippetProp[] = [
    { label: "University", value: "University of Southern California" },
    { label: "Major", value: "B.A. Journalism, B.A. Economics" },
    { label: "Graduation", value: "May 2025" },
    { label: "Minors", value: "N/A" },
    { label: "GPA", value: "3.7" },
    { label: "Hometown", value: "Winnetka, IL" },
    { label: "Hobbies", value: "Skiing, playing pickup soccer, obsessive pdcast listening" },
    { label: "Favorite Sandwich", value: "Pastrami" }
]

export const SOCIAL_MEDIA_LIST: SocialMediaProps[] = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/jack-hallinan-a7562220b/", icon: <LinkedIn sx={{color: lightTheme.primaryColor}}/> },
    { name: "X", link: "https://x.com/jackhallinan17", icon: <X sx={{color: lightTheme.primaryColor}}/> },
    { name: "Spotify", link: "https://open.spotify.com/show/7ipJaqfqreC974LvPWZJa0", icon: <SpotifyIcon sx={{color: lightTheme.primaryColor}}/> }
]

export const MY_WORK_LINKS: WorkLinkProps[] = [
    { name: "Fullerton to Freshman of the Year: The Maribel Flores journey", url: "https://dailytrojan.com/2024/03/01/from-fullerton-to-freshman-of-the-year-the-maribel-flores-journey/", icon: <SportsSoccer/>},
    { name: "Notes from practice: The Muss Bus gets rolling", url: "https://www.uscannenbergmedia.com/2024/06/26/notes-from-practice-the-muss-bus-gets-rolling/", icon: <SportsBasketball/>},
    { name: "Leroux earns Angel City massive three points on Juneteenth", url: "https://www.uscannenbergmedia.com/2024/06/20/leroux-earns-angel-city-massive-three-points-on-juneteenth/", icon: <SportsSoccer/>},
    { name: "Rising Ballers: Casey Phair continues Angel City’s youth movement", url: "https://dailytrojan.com/2024/03/21/casey-phair-continues-angel-citys-youth-movement/", icon: <SportsSoccer/>},
    { name: "USC Hops on the Muss Bus! Trojans Hire Eric Musselman as Men’s Basketball Head Coach", url: "https://open.spotify.com/episode/3HIR90QnlZ4J033Lw5XpyM", icon: <SportsBasketball/>},
    { name: "What it means to be a Premier League in America", url: "https://www.uscannenbergmedia.com/2024/04/24/what-it-means-to-be-a-premier-league-fan-in-america/", icon: <SportsSoccer/>},
    { name: "USC men’s basketball relies on defense to secure win versus Utah", url: "https://www.uscannenbergmedia.com/2024/02/15/usc-mens-basketball-relies-on-defense-to-secure-win-versus-utah/", icon: <SportsBasketball/>},
    { name: "‘Challengers’ serves its audience a volley of emotions", url: "https://www.uscannenbergmedia.com/2024/05/01/challengers-serves-its-audience-a-volley-of-emotions/", icon: <Movie/>},
]