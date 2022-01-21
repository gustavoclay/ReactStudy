module.export = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}
