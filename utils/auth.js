const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect("/login");
        console.log("Password Incorrect");
    } else {
        next();
    }
};

module.exports = withAuth;