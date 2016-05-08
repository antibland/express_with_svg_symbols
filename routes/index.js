var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var fs            = require('fs'),
      file_names    = fs.readdirSync('./public/svg/'),
      len           = file_names.length,
      scrubbed_names = [],
      file_ext,
      file_name,
      without_extension;

  for (var i = 0; i < len; i++) {
    file_name = file_names[i];
    file_ext = file_name.split('.')[1].toLowerCase();
    without_extension = file_name.split('.')[0];

    if (file_ext === 'svg') {
      scrubbed_names.push(without_extension);
    }
  }

  res.render('index', {
    title: 'Express',
    svgs: scrubbed_names
  });
});

module.exports = router;
