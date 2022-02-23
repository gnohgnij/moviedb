import React, { useState } from "react";
import { Drawer, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerText from "./DrawerTexts";
import DrawerFilter from "./DrawerFilter";
import "./DrawerMenu.css";

const drawerWidth = 240;

const DrawerMenu = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="drawer">
      <div className="drawer--button">
        <Button
          onClick={toggleDrawer}
          startIcon={<MenuIcon />}
          sx={[
            {
              color: "#051923",
              bgcolor: "#e0e1dd",
            },
            {
              "&:hover": {
                backgroundColor: "#006494",
              },
            },
          ]}
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
        >
          <DrawerFilter
            years={props.years}
            setFilteredYear={props.setFilteredYear}
          />
          <br />
          <div className="drawer--text">
            <DrawerText />
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
