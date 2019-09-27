var path = require("path");

module.exports = function(app) {

  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
