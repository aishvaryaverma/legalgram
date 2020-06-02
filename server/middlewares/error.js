const handleError = (err, res) => {
    let { statusCode, message } = err;

    // when recieving a generic error make sure error code is not empty
    if (!statusCode) {
        statusCode = 400;
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        statck: err.stack
    });
}

module.exports = handleError;