import React from "react";
import { Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./DrawerText.css";

const DrawerText = () => {
  const aboutText =
    "Hi, I'm Jing Hong. I am a software engineer who loves watching movies. I created this website to record down the movies I've watched each year, " +
    "and also to practice web development.";

  const recommendText = "Please recommend movies to me!";

  return (
    <React.Fragment>
      <Typography align="center" variant="h5" sx={{ fontWeight: "Bold" }}>
        About
      </Typography>
      <br />
      <Typography align="center" paragraph={true} variant="body2">
        {aboutText}
      </Typography>
      <br />
      <Typography align="center" paragraph={true} variant="body2">
        {recommendText}
      </Typography>
      <div className="text--links">
        <Link
          href="https://github.com/gnohgnij"
          target="_blank"
          sx={{ color: "#e0e1dd" }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default DrawerText;
