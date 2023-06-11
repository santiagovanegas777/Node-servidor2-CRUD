const express = require("express");
const {
  getMovies,
  getMoviesId,
  getMoviesTitle,
  getGener,
  getYear2010,
  sewNewMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");
const router = express.Router();

router.get("/", getMovies);

router.get("/id/:id", getMoviesId);

router.get("/title/:title", getMoviesTitle);

router.get("/gener/:genre", getGener);

router.get("/yearNext2010/:year", getYear2010);

router.post("/",sewNewMovie);

router.put("/:id",updateMovie);

router.delete("/:id", deleteMovie);


module.exports = router;
