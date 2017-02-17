module.exports = {
    addDino: function (req, res, next) {
        req.dinosaur = "Stegosarus";
        console.log(req.dinosaur);
        next();
    }
}