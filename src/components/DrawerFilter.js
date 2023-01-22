import React, { useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

const DrawerFilter = (props) => {
  const [year, setYear] = useState("");

  const handleSelect = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (year) {
      props.setFilteredYear(year);
      props.toggleDrawer(false);
    }
  };

  const yearList = props.years.map((year) => {
    return (
      <MenuItem value={year.year} key={year.id}>
        {year.year}
      </MenuItem>
    );
  });

  return (
    <React.Fragment>
      <Typography align="center" variant="h5" sx={{ fontWeight: "Bold" }}>
        Filters
      </Typography>

      {/* Filter by year */}

      <Box sx={{ minWidth: 120 }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            variant="standard"
            focused
            fullWidth
            size="small"
            margin="normal"
          >
            <InputLabel
              id="select-year-label"
              color="primary"
              variant="standard"
              sx={{ fontSize: "1.2rem" }}
            >
              Filter By Year
            </InputLabel>
            <Select
              labelId="select-year-label"
              id="select-year"
              value={year}
              label="Year"
              onChange={handleSelect}
              sx={{ color: "white" }}
            >
              {yearList}
            </Select>

            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default DrawerFilter;
