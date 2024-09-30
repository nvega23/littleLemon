import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('little_lemon.db');

export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS menu (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        price REAL,
        category TEXT,
        image TEXT
      );`
    );
  });
};

export const insertMenuItems = (menuItems) => {
  db.transaction(tx => {
    menuItems.forEach(item => {
      tx.executeSql(
        'INSERT INTO menu (title, description, price, category, image) VALUES (?, ?, ?, ?, ?)',
        [item.title, item.description, item.price, item.category, item.image]
      );
    });
  });
};

export const filterByCategories = (selectedCategories, callback) => {
  const placeholders = selectedCategories.map(() => '?').join(',');
  const query = `SELECT * FROM menu WHERE category IN (${placeholders})`;

  db.transaction(tx => {
    tx.executeSql(query, selectedCategories, (_, { rows }) => {
      callback(rows._array);
    });
  });
};
