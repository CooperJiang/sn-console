"use strict"
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/sn-log.min')
}else{
    module.exports = require('./dist/sn-log')
}
