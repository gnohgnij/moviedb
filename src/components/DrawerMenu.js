import React, { useState } from "react";
import { Drawer, Typography, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerText from "./DrawerTexts";
import "./DrawerMenu.css";

const drawerWidth = 240;

const DrawerMenu = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="drawer">
      <React.Fragment>
        <div className="drawer--button">
          <Button
            onClick={toggleDrawer}
            startIcon={<MenuIcon />}
            sx={{ color: "#e0e1dd" }}
          >
            Menu
          </Button>
        </div>
        <Drawer anchor="right" open={toggle} onClose={toggleDrawer}>
          <Box
            sx={{
              width: drawerWidth,
              bgcolor: "#051923",
              color: "#e0e1dd",
              height: "100%",
              padding: "1rem",
            }}
            role="presentation"
            onClick={toggleDrawer}
          >
            <DrawerText />
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerMenu;
