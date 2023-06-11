const Movie = require('../models/movies.model');


const getMovies = async(req, res) => {
   try {
        const allMovies = await Movie.find()
        return res.status(200).json(allMovies)
   } catch (error) {
        return res.status(500).json(error) 
   }
};

const getMoviesId = async(req, res) => {
    try {
      const {id} = req.params
    //   const movieId = await Movie.findById({id})
    //   return res.status(200).json(movieId)
    const movie = await Movie.findById(id);
    if (movie) {
        return res.status(200).json(movie);
    } else {
        return res.status(404).json('No movie found by this id');
    }
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getMoviesTitle = async(req, res) => {
    
      
      try {
        const {title} = req.params
		const movieByTitle = await Movie.find({ title });
		return res.status(200).json(movieByTitle);
	} catch (err) {
		return res.status(500).json(err);
	}
};
   
const getGener = async(req, res) =>{

    try {
        const {genre} = req.params
        const moviesGener = await Movie.find({genre});
        return res.status(200).json(moviesGener);
        
    } catch (error) {
        return res.status(500).json(err);
    }
};

const getYear2010 = async (req, res) =>{
try {
    const {year} = req.params
    const moviesYear2010 = await Movie.find({year:{$gt:year}})
    return res.status(200).json(moviesYear2010);
} catch (error) {
    return res.status(500).json(err);
}
}

const sewNewMovie = async (req,res) =>{
    try {
       const newMovie = new Movie(req.body);
       const createMovie = await newMovie.save();
       return res.status(200).json(createMovie);
    } catch (error) {
        return res.status(500).json(err);
    }
}

const updateMovie = async (req, res) =>{
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updateMovie = await Movie.findByIdAndUpdate(id,putMovie,{
            new: true,
        });
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(err);
    }
};
const deleteMovie = async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteMovies = await Movie.findByIdAndDelete(id);
        if(!deleteMovies){
            return res.status(404).json({message: 'Movie no encontrada'});
        }
        return res.status(200).json(deleteMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
};
module.exports = {getMovies, getMoviesId, getMoviesTitle, getGener, getYear2010, sewNewMovie,
    updateMovie,
    deleteMovie,}