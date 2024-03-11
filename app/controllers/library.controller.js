"use strict";

/* -------------------------------------------------------------------------- */
/*                           LIBRARY CONTROLLERS                              */
/* -------------------------------------------------------------------------- */

const Book = require("../models/library.model");

module.exports = {
  list: async (req, res) => {
    const data = await Book.findAndCountAll();
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  //*------------------------- CRUD ---------------------------------------//

  create: async (req, res) => {
    const data = await Book.create(req.body);
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Book.update(req.body, { where: { id: req.params.id } });
    res.status(200).send({
      error: false,
      message: "Updated",
      body: req.body,
      result: data,
      new: await Book.findByPk(req.params.id),
    });
  },

  delete: async (req, res) => {
    const data = await Book.destroy({ where: { id: req.params.id } });
    if (data > 0) {
      res.sendStatus(204);
    } else {
      res.erroStatusCode = 404;
      throw new Error("not found");
    }
  },
};
