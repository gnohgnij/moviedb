import { Button } from "@mui/material";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import React from "react";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const backOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={backOnTop}
      startIcon={<ArrowCircleUpRoundedIcon />}
      sx={[
        {
          zIndex: "99",
          position: "fixed",
          bottom: "3%",
          right: "3%",
          bgcolor: "black",
          color: "#e0e1dd",
        },
        {
          "&:hover": {
            backgroundColor: "#e0e1dd",
            color: "black",
          },
        },
      ]}
    >
      Back To Top
    </Button>
  );
};

export default BackToTopButton;
