// images of projects
import newfilm from "/assets/project-images/newfilm.png";
import youtube from "/assets/project-images/youtube_clone.jpg";
import promptArt from "/assets/project-images/prompt-art.png";
import weatherApp from "/assets/project-images/weather-app.jpg";
import perspicacity from "/assets/project-images/perspicacity.png";

// images of tech stack logos
import html from "/assets/icons/html.png";
import css from "/assets/icons/css.png";
import javascript from "/assets/icons/js.png";
import mongodb from "/assets/icons/mongodb.png";
import nextjs from "/assets/icons/nextjs.png";
import node from "/assets/icons/node.png";
import react from "/assets/icons/react.png";
import scss from "/assets/icons/scss.png";
import tailwind from "/assets/icons/tailwind.png";
import typescript from "/assets/icons/typescript.png";
import firebase from "/assets/icons/firebase.png";

// array of objects describing projects to be used in projects section.

export const projects = [
    {
        name: "Perspicacity GovCon",
        img: perspicacity,
        desc: "This is a contract position where I was tasked with completing the homepage and authentication for a business. The homepage was made using Nextjs, tailwind, and typescript. Next-auth was used for quickly integrating user authentication. Mongodb was used to store login credentials.",
        link: "https://perspicacity.vercel.app/",
        stack: [
            nextjs,
            mongodb,
            react,
            tailwind,
            typescript,
            node,
            html,
        ],
    },
    {
        name: "NewFilm",
        img: newfilm,
        desc: "This is a full stack website made using Next.js. At the moment I've added auth, search bar functionality, and the movies will direct the user to a page with their information. The homepage is complete and plan to add ways for users to update their information as well as have their own page where they can see favorited movies. The styles for this project are made using tailwind. I wanted to do a project where I made my own movie website with inspiration from Netflix and imdb. I used a components and svgs from Shape Divider and Aceternity to give the website a more modern feel. I hope you enjoy my work so far!",
        link: "https://newfilm-self.vercel.app/",
        stack: [
            nextjs,
            node,
            tailwind,
            typescript,
            mongodb,
            react,
            html,
            firebase,
        ]
    },
    {
        name: "Prompt Art",
        img: promptArt,
        desc: "This is a fun project I did where I created a social media application for ai-generated images. It's made using Next.js, google auth for sign in, mongodb, and firebase for storing data. I did this project to learn about authentication and storing images and user information on a database.",
        link: "https://prompt-art.vercel.app/",
        stack: [
            javascript,
            react,
            html,
            scss,
            mongodb,
            node,
            firebase,
        ]
    },
    {
        name: "Weather App",
        img: weatherApp,
        desc: "This is a project I did while learning web development in school. It's made using HTML, CSS, and Javascript on the client-side. For the server-side, I used NodeJS, express, and swagger.json. The data is fetched on the server from Free Weather API and returned to the client to be modeled on the page. The live site is up, but at the time I hosted it on render so it would take a bit to start up the server due to inactivity, so I linked to the repository and the live site link is there as well.",
        link: "https://github.com/spencer-234/weather_app?tab=readme-ov-file",
        stack: [
            html,
            css,
            javascript,
            node,
        ]
    },
    {
        name: "YouTube Clone",
        img: youtube,
        desc: "This is one of the first projects I made to put my design skills to the test. I wanted to clone the homepage of YouTube and made this using React and SCSS. The live site is up, but at the time I hosted it on render so it would take a bit to start up the server due to inactivity, so I linked to the repository and the live site link is there as well.",
        link: "https://github.com/spencer-234/youtube_clone?tab=readme-ov-file",
        stack: [
            react,
            html,
            css,
            javascript,
        ]
    }
]