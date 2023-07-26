const models = require("../models");

const browse = (req, res) => {
  models.categories
    .findAll()
    .then(([categories]) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.categories
    .find(req.params.id)
    .then(([categories]) => {
      if (categories[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(categories[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseRecetteByCategory = (req, res) => {
  models.recettes
    .findRecetteByCategory(req.params.id)
    .then(([categories]) => {
      if (categories[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(categories);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const categories = req.body;
  categories.id = parseInt(req.params.id, 10);

  models.categories
    .update(categories)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const categories = req.body;
  try {
    const categoryInsert = await models.categories.insert(categories);
    res
      .location(`/categories/${categoryInsert[0].insertId}`)
      .status(201)
      .json({ ...categories, id: categoryInsert[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.categories
    .delete(req.params.id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  browseRecetteByCategory,
  edit,
  add,
  destroy,
};
