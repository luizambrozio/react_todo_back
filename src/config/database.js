const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://root:123@ds121955.mlab.com:21955/grafica')
