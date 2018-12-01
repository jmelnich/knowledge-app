import path from 'path';
import sqlite from 'sqlite3';

const ROOT = path.resolve(__dirname);
sqlite.verbose();
export const db = new sqlite.Database(ROOT + '/knowledge');

db.run = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.prepare(sql, params).run(function (err) {
            if (err) {
                console.log('Error running your sql\n', err);
                reject(err);
            } else {
                console.log('result from DB == ' + this.lastID);
                resolve(this.lastID);
            }
        })
    });
};

db.fetch = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, result) => {
            if (err) {
                console.log('Error running sql: ' + sql, err);
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
};

db.fetchAll = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log('Error getting data from db\n', err);
                reject(err);
            } else {
                resolve(rows);
            }
        })
    });
};

db.create = (table, columns, values) => {
    return db.run(`INSERT INTO ${table} (${columns}) VALUES (${'?, '.repeat(values.length - 1) + '?'})`, values);
};

db.getByUnique = (table, column, value) => {
	return db.fetch(`SELECT * FROM ${table} WHERE ${column} = ?`, [value]);
};

db.getAllByUnique = (table, column, value) => {
  return db.fetchAll(`SELECT * FROM ${table} WHERE ${column} = ?`, [value]);
};

db.updateMultipleConditions = (table, column, valueCol, key, valKey, key2, valKey2) => {
    return db.run(`UPDATE ${table} SET ${column} = ? WHERE ${key} = ? AND ${key2} = ?`, [valueCol, valKey, valKey2]);
};