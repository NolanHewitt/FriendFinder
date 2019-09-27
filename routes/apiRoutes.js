var friendData = require("../data/friendData");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    if (friendData.length < 999) {
      friendData.push(req.body);
      res.json(true);
    }
  });

  app.post("/api/clear", function(req, res) {
    friendData.length = 0;
    res.json({ ok: true });
  });
};
