var db = require("../models");

module.exports = function(app) {
  //route to get all of the products
  app.get("/api/products", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct) {
      return res.json(dbProduct);
    });
  });

  //route to get a single product
  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      console.log(dbProduct);
      res.json(dbProduct);
    });
  });
};
