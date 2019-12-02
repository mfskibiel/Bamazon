var path = require("path");

module.exports = function(app) {
  //loads the main page with products
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
