import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Card from "./components/Card";
import DrawerMenu from "./components/DrawerMenu";
import { Grid, Item } from "@mui/material";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);

  const movieCollectionRef = collection(db, "movies");
  const yearCollectionRef = collection(db, "years");

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(movieCollectionRef);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getYears = async () => {
      const data = await getDocs(yearCollectionRef);
      setYears(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMovies();
    getYears();
  }, []);

  const movieList = years.reverse().map((year) => {
    return (
      <div key={year.id}>
        <h1>{year.year}</h1>
        <Grid
          container={true}
          spacing={3}
          xl={"auto"}
          lg={"auto"}
          md={"auto"}
          sm={"auto"}
          xs={"auto"}
        >
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

  return (
    <div className="app">
      <DrawerMenu />
      <div className="app--movies">{movieList}</div>
    </div>
  );
};

export default App;
