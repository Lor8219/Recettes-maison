const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} as c
    inner join categories_to_recettes as ctr on ctr.categorie_id = categories(id)
    inner join recettes as r on ctr.recette_id = recettes(id)
    where categorie_id = ?`,
      [id]
    );
  }

  insert(categories) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      categories.title,
    ]);
  }

  update(categories) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [categories.title, categories.id]
    );
  }
}

module.exports = CategoriesManager;
