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
    Movie,
    Tv,
} from "@mui/icons-material";
import { SocialMediaProps } from "../components/bioSection/socialMediaBar";
import { WorkLinkProps } from "../components/workSection";
import { BioSnippetProp } from "../components/bioSection/bioSnippets";
import { ExperienceProps } from "../components/experienceSection";

export const TALK_OF_TROY_DESCRIPTION: string = "Jack Hallinan, Ben Cohen and a rotating cast of guests discuss the wide world of soccer from their unique perspective as American fans of the world's game. They focus heavily on the Premier League, Champions League and other major soccer news with a lens that balances both deep analysis and a light, humorous touch."

export const BIO_SNIPPETS: BioSnippetProp[] = [
    { label: "University", value: "University of Southern California" },
    { label: "Major", value: "B.A. Journalism, B.A. Economics" },
    { label: "Graduation", value: "May 2025" },
    { label: "Hobbies", value: "Skiing, playing pickup soccer, obsessive podcast listening" },
]

export const SOCIAL_MEDIA_LIST: SocialMediaProps[] = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/jack-hallinan-a7562220b/", icon: <LinkedIn sx={{color: lightTheme.primaryColor}}/> },
    { name: "X", link: "https://x.com/jackhallinan17", icon: <X sx={{color: lightTheme.primaryColor}}/> },
    { name: "Spotify", link: "https://open.spotify.com/show/7ipJaqfqreC974LvPWZJa0", icon: <SpotifyIcon sx={{color: lightTheme.primaryColor}}/> }
]

export const MY_WORK_LINKS: WorkLinkProps[] = [
    { name: "The Water Cooler: Can Trojan basketball bring home the natty?", url: "https://youtu.be/Xej5Ae_hhgE?si=yYgMWbCAi4ZA6jrr&t=67", icon: <Tv/>},
    { name: "Kings waste 3rd-period leads, lose to Chicago 4-3 in shootout", url: "https://www.uscannenbergmedia.com/2024/11/02/kings-waste-3rd-period-leads-lose-to-chicago-4-3-in-shootout/", icon: <SportsHockey/>},
    { name: "With season three, 'Industry's' stock soared", url: "https://www.uscannenbergmedia.com/2024/10/07/with-season-three-industrys-stock-soared/", icon: <Movie/>},
    { name: "Second-half recovery not enough to fuel USC to victory over Michigan", url: "https://www.uscannenbergmedia.com/2024/09/21/second-half-recovery-not-enough-to-fuel-usc-to-victory-over-michigan/", icon: <SportsFootball/>},
    { name: "'Shōgun' is already an Emmy's showstopper", url: "https://www.uscannenbergmedia.com/2024/09/13/shogun-is-already-an-emmys-showstopper/", icon: <Movie/>},
    { name: "Fullerton to Freshman of the Year: The Maribel Flores journey", url: "https://dailytrojan.com/2024/03/01/from-fullerton-to-freshman-of-the-year-the-maribel-flores-journey/", icon: <SportsSoccer/>},
    { name: "Notes from practice: The Muss Bus gets rolling", url: "https://www.uscannenbergmedia.com/2024/06/26/notes-from-practice-the-muss-bus-gets-rolling/", icon: <SportsBasketball/>},
    { name: "Rising Ballers: America's next great hope", url: "https://dailytrojan.com/2024/04/18/rising-ballers-americas-next-great-hope/", icon: <SportsSoccer/>},
    { name: "Leroux earns Angel City massive three points on Juneteenth", url: "https://www.uscannenbergmedia.com/2024/06/20/leroux-earns-angel-city-massive-three-points-on-juneteenth/", icon: <SportsSoccer/>},
    { name: "Rising Ballers: Casey Phair continues Angel City’s youth movement", url: "https://dailytrojan.com/2024/03/21/casey-phair-continues-angel-citys-youth-movement/", icon: <SportsSoccer/>},
    { name: "USC Hops on the Muss Bus! Trojans Hire Eric Musselman as Men’s Basketball Head Coach", url: "https://open.spotify.com/episode/3HIR90QnlZ4J033Lw5XpyM", icon: <SportsBasketball/>},
    { name: "What it means to be a Premier League in America", url: "https://www.uscannenbergmedia.com/2024/04/24/what-it-means-to-be-a-premier-league-fan-in-america/", icon: <SportsSoccer/>},
    { name: "USC men’s basketball relies on defense to secure win versus Utah", url: "https://www.uscannenbergmedia.com/2024/02/15/usc-mens-basketball-relies-on-defense-to-secure-win-versus-utah/", icon: <SportsBasketball/>},
    { name: "‘Challengers’ serves its audience a volley of emotions", url: "https://www.uscannenbergmedia.com/2024/05/01/challengers-serves-its-audience-a-volley-of-emotions/", icon: <Movie/>},
    { name: "Presence: The Eb & Flow Yoga Studio Story", url: "https://www.the7times.com/the-businesses/eb-and-flow-yoga-studio-chicago-illinois", icon: <Article/>},
    { name: "Football scores 21 straight, defeats Cal in chaotic fashion", url: "https://dailytrojan.com/2023/10/28/football-comes-back-from-21-point-hole-defeats-cal-in-chaotic-fashion/", icon: <SportsFootball/>},
    { name: "UCLA routs Trojans in final regular season match", url: "https://dailytrojan.com/2023/11/05/ucla-routs-trojans-in-final-regular-season-match/", icon: <SportsSoccer/>},
    { name: "Four the Win: Four the Send-Off", url: "https://open.spotify.com/show/19hP5eTlnLbrVH3I8fkH8T", icon: <VolumeUp/>}
]

export const EXPERIENCES: ExperienceProps[] = [
    {
        company: "Fox Sports Digital Productions",
        position: "Intern",
        duration: "June-July 2024, September-November 2023"
    },
    {
        company: "Talk of Troy",
        url: "https://www.uscannenbergmedia.com/talkoftroy/",
        position: "Digital Managing Editor",
        duration: "June 2024-present"
    },
    {
        company: "Annenberg Media Sports Desk",
        url: "https://www.uscannenbergmedia.com/sports/",
        position: "Digital Editor",
        duration: "January 2024-present"
    },
    {
        company: "Talkin' Troy, the Daily Trojan's sports podcast",
        url: "https://open.spotify.com/show/5ah3qrb5gEcOOJOGcnEGUu",
        position: "Editor and Producer",
        duration: "January-May 2024"
    }
]