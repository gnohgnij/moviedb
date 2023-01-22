import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Card from "./components/Card";
import DrawerMenu from "./components/DrawerMenu";
import { Grid } from "@mui/material";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [filteredYear, setFilteredYear] = useState(2023);

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
  movieList = years.filter(checkYear).map((year) => {
    let count = 0;
    return (
      <div key={year.id}>
        <Grid container={true} spacing={3}>
          {movies
            .filter((movie) => movie.year === year.year)
            .map((movie) => {
              count += 1;
              return (
                <Grid item key={movie.id}>
                  <Card image={movie.image} title={movie.title} />
                </Grid>
              );
            })}
        </Grid>
        <div className="app--count">
          I watched <span className="handwriting">{count}</span> movies
        </div>
      </div>
    );
  });

  return (
    <div className="app">
      <DrawerMenu years={years} setFilteredYear={setFilteredYear} />
      <h1 className="title">
        Movies I watched in <span className="handwriting">{filteredYear}</span>
      </h1>
      <BackToTopButton />
      <div className="app--movies">{movieList}</div>
    </div>
  );
};

export default App;
