import {DatabaseSync} from 'node:sqlite';
const db = new DatabaseSync('foody.db');

db.exec(
  `CREATE TABLE IF NOT EXISTS users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

-- Allergies table
CREATE TABLE IF NOT EXISTS allergies (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    Allergy TEXT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

-- Preferences table
CREATE TABLE IF NOT EXISTS preferences (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    PreferenceID TEXT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);`
)


export default db;