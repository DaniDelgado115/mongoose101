const Ikasle = require('../models/ikasle.model');

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.deleteIkasleById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        console.log(userId);
        const user=await Ikasle.findByIdAndDelete(userId);
        res.send(user);
    } catch (error){
        next(error);
    }
}
exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

exports.editIkasle = async (req, res, next) => {
    const ikasle = await Ikasle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
}


// Gehitu beste kontroladoreak...