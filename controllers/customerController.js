const async = require("async");
const validator = require("express-validator");

const Customer = require("../models/customer");

exports.get_cust_list = (req, res, next) => {
  Customer.find().exec((err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length) {
      res.status(200).json({ list: result });
    } else {
      res.status(404).end();
    }
  });
};

exports.add_cust = [
  validator
    .body("f_name", "only alphabets allowed in fisrt name")
    .escape()
    .isAlpha()
    .trim(),
  validator
    .body("l_name", "only alphabets allowed in last name")
    .escape()
    .isAlpha()
    .trim(),
  validator
    .body("age", "only number allowed in age")
    .escape()
    .isNumeric()
    .trim(),
  validator
    .body("sex", "only 1 character allowed in sex")
    .escape()
    .isAlpha()
    .trim(),

  (req, res, next) => {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      res.statusMessage = "";
      err.map((err) => (res.statusMessage += err.msg + "<br/>"));
      res.status(400).end();
      return;
    }

    Customer.estimatedDocumentCount((err, count) => {
      if (err) {
        next(err);
        return;
      }
      var index = count + 1;
      var customer = new Customer({
        cust_id: index,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        age: req.body.age,
        sex: req.body.sex,
      });

      customer.save((err) => {
        if (err) {
          next(err);
          return;
        }
        res.status(200).end();
      });
    });
  },
];
