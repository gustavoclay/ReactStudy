const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://root:root@localhost:27017/todo?authSource=admin')
