import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Music Player",
    description:
      "A sleek and dynamic web application that allows users to listen to music tracks with an engaging user interface. Built with React, the app provides real-time interaction, smooth transitions, and responsive design.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://github.com/oscarjm97/react-music-player",
  },
  {
    title: "React Shopping Cart",
    description:
    "An intuitive and interactive web application that allows users to browse products, add items to a shopping cart and remove them. The app provides a seamless online shopping experience, featuring dynamic UI updates, real-time data, and responsive design.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://github.com/oscarjm97/react-shopping-cart",
  },
  {
    title: "React Bank App",
    description:
      "A dynamic and user-friendly web application that allows users to manage their bank accounts, track transactions, and access various financial services.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://github.com/oscarjm97/react-bank-app",
  },
  {
    title: "React My Portfolio",
    description:
      "This project is a personal portfolio website built using React.js to showcase my skills, projects, and experience. Further, you can see my profile and contact me through this portfolio.",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://github.com/oscarjm97/react-my-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
