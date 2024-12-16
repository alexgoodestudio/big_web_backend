const service = require("../subscribers/subscribers.service")

async function emailExists(req, res, next) {
    let email = res.locals.email_address;
    const data = await service.readEmail(email)
    if(data) {
        return next({
            status:409,
            message: `The email ${email} is already a subscriber`
        });
    }
    next();
}

module.exports = emailExists;