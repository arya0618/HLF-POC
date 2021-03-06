const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const format = require('date-format');

module.exports = router;

router.use(function(req, res, next) {

  console.log(format.asString('hh:mm:ss.SSS', new Date())+'::............ '+req.url+' .............');
  next(); // make sure we go to the next routes and don't stop here

  function afterResponse() {
      res.removeListener('finish', afterResponse);          
  }    
  res.on('finish', afterResponse);

});

router.get('/api/getList',controller.getList);
router.get('/api/init',controller.InitNetwork);
router.post('/api/add',controller.createAssets);
router.get('/api/assets/:id',controller.getAssetsById)
router.put('/api/update/:id',controller.updateAssets)

