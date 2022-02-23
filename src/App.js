import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Card from "./components/Card";
import DrawerMenu from "./components/DrawerMenu";
import { Grid } from "@mui/material";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [filteredYear, setFilteredYear] = useState("all");

  const movieCollectionRef = collection(db, "movies");
  const yearCollectionRef = collection(db, "years");

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(movieCollectionRef);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getYears = async () => {
      const data = await getDocs(yearCollectionRef);
      setYears(
        data.docs.reverse().map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getMovies();
    getYears();
  }, []);

  function checkYear(year) {
    return year.year === filteredYear;
  }

  let movieList = "";
  if (filteredYear === "all") {
    movieList = years.map((year) => {
      return (
        <div key={year.id}>
          <h1>{year.year}</h1>
          <Grid container={true} spacing={3}>
            {movies
              .filter((movie) => movie.year === year.year)
              .map((movie) => {
                return (
                  <Grid item key={movie.id}>
                    <Card image={movie.image} title={movie.title} />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      );
    });
  } else {
    movieList = years.filter(checkYear).map((year) => {
      return (
        <div key={year.id}>
          <h1>{year.year}</h1>
          <Grid container={true} spacing={3}>
            {movies
              .filter((movie) => movie.year === year.year)
              .map((movie) => {
                return (
                  <Grid item key={movie.id}>
                    <Card image={movie.image} title={movie.title} />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      );
    });
  }

  return (
    <div className="app">
      <DrawerMenu years={years} setFilteredYear={setFilteredYear} />
      <div className="app--movies">{movieList}</div>
    </div>
  );
};

export default App;
