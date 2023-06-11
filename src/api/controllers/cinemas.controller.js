const Cinema = require('../models/cinemas.model');

const getCinema = async (req, res) => {
    try {
        const allCinemas = await Cinema.find();
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const newCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(200).json(createdCinema);

        }
     catch (error) {
        return res.status(500).json(error);
    }
};

const updateCinema = async (req, res) =>{
  try {
    const {id} = req.params;
    const putCinema = new Cinema(req.body);
    putCinema._id = id;
    const updateCine = await Cinema.findByIdAndUpdate(id,putCinema,{
        new: true,
    });
    return res.status(200).json(updateCine);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCinema = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteCine = await Cinema.findByIdAndDelete(id);
        if(!deleteCine){
            return res.status(200).json({message: 'Cinema no encontrado'});
        }
        return res.status(200).json(deleteCine);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {getCinema, newCinema, updateCinema, deleteCinema};