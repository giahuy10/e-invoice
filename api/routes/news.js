var express = require('express')
var router = express.Router()
var model = require('../models').News
var slug = require('slug')
var multer   =  require( 'multer' )
var moment = require('moment')
// var Jimp = require('jimp')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/images/news')
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYY-MM-DD') +"-"+file.originalname)
  }
})

var upload   =  multer( {storage: storage} )
var sizeOf   =  require( 'image-size' )
router
  // Get all News
  .get('/', (req, res) => {
    // model.findAll().then(data => res.json(data)).catch(err => res.json(err))
    model.findAndCountAll()
      .then(data => {
        var limit = parseInt(req.query.perPage)
        var currentPage = parseInt(req.query.currentPage)
        var totalPages = Math.ceil(data.count / limit)
        var offset = limit * (currentPage - 1);
        model.findAll({
          limit: limit,
          offset: offset,
        })
          .then((news) => {
            res.status(200).json({'result': news, 'count': data.count, 'pages': totalPages, 'currentPage': currentPage});
          })
      })
      .catch(err => res.json(err))
  })

  // Get detail News by ID
  .get('/:id', (req, res) => {
    model.findByPk(req.params.id).then(data => res.json(data)).catch(err => res.json(err))
  })

  // Insert News
  .post('/', (req, res) => {
    model.create(req.body).then(data => res.send(data)).catch(err => res.json(err))
  })

  // Update News
  .put('/:id', (req, res) => {
    model.update(
        req.body,
        { where: {id: req.params.id} }
      ).then(() => {
        res.status(200).send("updated successfully with id = " + req.params.id);
      }).catch(err => res.json(err))
  })

  // Delete News
  .delete('/:id', (req, res) => {
    model.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.status(200).send('deleted successfully with id = ' + id);
    }).catch(err => res.json(err))
  })

  // Upload image
  .post( '/upload', upload.single( 'file' ), function( req, res, next ) {

    if ( !req.file.mimetype.startsWith( 'image/' ) ) {
      return res.status( 422 ).json( {
        error : 'The uploaded file must be an image'
      } );
    }

    var dimensions = sizeOf( req.file.path );

    if ( ( dimensions.width < 200 ) || ( dimensions.height < 120 ) ) {
      return res.status( 422 ).json( {
        error : 'The image must be at least 200 x 120px'
      } );
    }

    let folder = '/images/news/'

    return res.status( 200 ).json( {location: folder+req.file.filename})

  })

module.exports = router;
