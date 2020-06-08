const handleError = (err, res) => {
    let { statusCode, message, page, inputErrors } = err;

    // when recieving a generic error make sure error code is not empty
    if (!statusCode) {
        statusCode = 500;
    }

    // show generic errors on error page
    if (!page) {
        page = 'error';
    }

    console.log(err);
    // render the page with errors
    res.status(statusCode).render(page, {
        status: 'error',
        statusCode,
        message,
        inputErrors
    });
}

module.exports = handleError;