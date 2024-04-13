import "./projects.scss";
import weatherAppImage from "../../assets/project-images/weather-app.jpg";
import youtubeAppImage from "../../assets/project-images/youtube_clone.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const [desc, setDesc] = useState(false);

  const devProjects = [
    {
      name: "Weather App",
      img: weatherAppImage,
      desc: `This is a full stack weather app as my first mini project for the Institute of Data. 
      The front end portion is made up of html, css, and javascript.These files are served through express from the backend through the public directory. 
      I used javascript to fetch data from the backend and populate pages based on the data retrieved based on the zip code entered.
      The server is made using NodeJS, express, swagger.json, and axios. For retrieving data for requests, I used Free Weather API. 
      This API sends back weather data based on the zip code passed to it. 
      When a request is retrieved by the server, it will take the zip code from the request parameters and pass that to the API. 
      Once it gets the data back, it will send it to the client.`,
    },
    {
      name: "YouTube Homepage",
      img: youtubeAppImage,
      desc: `This is a clone of the YouTube homepage I made to practice using react. I used a YouTube API for this project to get the data for the videos and filled in the video components with that data.`,
    },
  ];

  // function for moving slider on arrow click
  const handleChange = (direction) => {
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    }
    if (direction === "right" && current < devProjects.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDesc(!desc);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="line"></div>
      </div>
      <div className="cards-container">
        <div className="card">
          <ArrowBackIosNewIcon
            className="arrow right"
            onClick={() => handleChange("right")}
          />
          <ArrowBackIosNewIcon
            className="arrow left"
            onClick={() => handleChange("left")}
          />
          <img src={devProjects[current].img} alt="project image" />
          {desc && (
            <div className="project-info">
              <h3>{devProjects[current].name}</h3>
              <p>{devProjects[current].desc}</p>
            </div>
          )}
        </div>
        <button
          onClick={(e) => handleClick(e)}
          data={desc ? "Close Description" : "Read Description"}
        ></button>
      </div>
    </section>
  );
};

export default Projects;
