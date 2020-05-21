const async = require("async");
const validator = require("express-validator");

const Address = require("../models/address");

exports.get_addresses = (req, res, next) => {
  Address.find({ cust_id: req.params.id }).exec((err, result) => {
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

exports.add_address = [
  validator.body("h_no").trim(),
  validator.body("s_no", "only number allowed").escape().isNumeric().trim(),
  validator.body("city").escape().trim(),
  validator.body("state").escape().trim(),

  (req, res, next) => {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      res.statusMessage = "";
      err.map((err) => (res.statusMessage += err.msg + "<br/>"));
      res.status(400).end();
      return;
    }
    var address = new Address({
      cust_id: req.body.cust_id,
      h_no: req.body.h_no,
      s_no: req.body.s_no,
      city: req.body.city,
      state: req.body.state,
    });

    address.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.status(200).end();
    });
  },
];
