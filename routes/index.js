const router = express.Router();
const apiRoutes = require('./api-routes.js');
const htmlRoutes = require('./html-routes.js');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;