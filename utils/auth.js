// This checks to see if the user is logged in, if they're logged in it continues
// If not logged in, it takes them to the login page

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
