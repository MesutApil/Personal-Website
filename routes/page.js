const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')


/**
 * This is an example route which renders the "home" template
 * using the home.json file to populate template data.
 */

router.get('/', (req, res) => {

	const data = req.config // {cdn:<STRING>, global:<OBJECT>}
	res.render('home', data) // render home.mustache
	
})

module.exports = router
