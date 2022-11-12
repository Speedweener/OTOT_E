// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to the Pokecentre!',
    });
});


router.use('/pokedex/:pokemon_id', (req, res, next) => {
    if (req.params.pokemon_id.length != 24) { // Not 24 would throw Cast Id error
        res.json({
            message: "Error, invalid pokemon ID of length " + req.params.pokemon_id.length
        })
    }
    else{
        next();
    }
})

var contactController = require('./Controller');
router.route('/pokedex')
    .get(contactController.index)
    .post(contactController.new);
router.route('/pokedex/:pokemon_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;


