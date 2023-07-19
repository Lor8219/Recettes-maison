const AbstractManager = require("./AbstractManager");

class RecettesManager extends AbstractManager {
  constructor() {
    super({ table: "recettes" });
  }

  findAll(title) {
    let url = `select  * from ${this.table}`;
    const value = [];
    if (title) {
      url += ` where title like ? `;
      value.push(`%${title}%`);
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
