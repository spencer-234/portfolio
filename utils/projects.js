import newfilm from "/assets/project-images/newfilm.png";
import youtube from "/assets/project-images/youtube_clone.jpg";
import promptArt from "/assets/project-images/prompt-art.png";
import weatherApp from "/assets/project-images/weather-app.jpg";
import perspicacity from "/assets/project-images/perspicacity.png";

export const projects = [
    {
        name: "Perspicacity GovCon",
        img: perspicacity,
        desc: "This is a contract position where I made the homepage for a business with plans on completing the full web app in time. At the moment, I have completed he homepage, login page, sign up page, and functional authentication. This is made with Next.js, typescript, and mongodb.",
        link: "https://perspicacity.vercel.app/",
    },
    {
        name: "NewFilm",
        img: newfilm,
        desc: "This is a full stack website made using Next.js. At the moment I've added auth, search bar functionality, and the movies will direct the user to a page with their information. The homepage is complete and plan to add ways for users to update their information as well as have their own page where they can see favorited movies. The styles for this project are made using tailwind. I wanted to do a project where I made my own movie website with inspiration from Netflix and imdb. I used a components and svgs from Shape Divider and Aceternity to give the website a more modern feel. I hope you enjoy my work so far!",
        link: "https://newfilm-self.vercel.app/",
    },
    {
        name: "Prompt Art",
        img: promptArt,
        desc: "This is a fun project I did where I created a social media application for ai-generated images. It's made using Next.js, google auth for sign in, mongodb, and firebase for storing data. I did this project to learn about authentication and storing images and user information on a database.",
        link: "https://prompt-art.vercel.app/",
    },
    {
        name: "Weather App",
        img: weatherApp,
        desc: "This is a project I did while learning web development in school. It's made using HTML, CSS, and Javascript on the client-side. For the server-side, I used NodeJS, express, and swagger.json. The data is fetched on the server from Free Weather API and returned to the client to be modeled on the page. The live site is up, but at the time I hosted it on render so it would take a bit to start up the server due to inactivity, so I linked to the repository and the live site link is there as well.",
        link: "https://github.com/spencer-234/weather_app?tab=readme-ov-file",
    },
    {
        name: "YouTube Clone",
        img: youtube,
        desc: "This is one of the first projects I made to put my design skills to the test. I wanted to clone the homepage of YouTube and made this using React and SCSS. The live site is up, but at the time I hosted it on render so it would take a bit to start up the server due to inactivity, so I linked to the repository and the live site link is there as well.",
        link: "https://github.com/spencer-234/youtube_clone?tab=readme-ov-file",
    }
]