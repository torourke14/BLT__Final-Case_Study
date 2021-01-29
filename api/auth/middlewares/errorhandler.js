const errorHandler = (err, req, res, next) =>{
    console.log('ERROR! - Something went wrong', err)

    res.status(400).send({
        message: `ERROR! - ${err.message}`
    })
}

module.exports = errorHandler;