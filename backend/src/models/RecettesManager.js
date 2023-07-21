const AbstractManager = require("./AbstractManager");

class RecettesManager extends AbstractManager {
  constructor() {
    super({ table: "recettes" });
  }

  findAll() {
    const url = `select  * from ${this.table}`;
    return this.database.query(url);
  }

  findAllByQuery(query) {
    let url = `select  * from categories_to_recettes as cr inner join ${this.table} as r on cr.recette_id = r.id inner join images as i on i.id = r.image_id `;
    const value = [];
    if (query.title) {
      url += ` where r.title like ? `;
      value.push(`%${query.title}%`);
    }
    if (query.categorie) {
      url += ` and cr.categorie_id = ? `;
      value.push(query.categorie);
    }
    return this.database.query(url, value);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(recettes) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      recettes.title,
    ]);
  }

  update(recettes) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [recettes.title, recettes.id]
    );
  }
}

module.exports = RecettesManager;
