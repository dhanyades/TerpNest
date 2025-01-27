const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./terp.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the database.');
        db.run("PRAGMA foreign_keys = ON;", error => {
            if (error) {
                console.error("Pragma statement didn't execute.", error);
            } else {
                console.log("Foreign key enforcement is on.");
            }
        });
        console.log('Connected to the SQlite database.');
    }
    
});

// Create a new table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    gender TEXT NULL,
    semester TEXT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.run(`CREATE TABLE IF NOT EXISTS preferences (
    id INTEGER PRIMARY KEY,
    userID INTEGER, 
    morning TEXT NULL,
    social TEXT NULL,
    clean TEXT NULL,
    allergy TEXT NULL,
    FOREIGN KEY (userID) REFERENCES users(id),
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.run(`CREATE TABLE IF NOT EXISTS favorites (
    userID INTEGER,
    propertyID INTEGER,
    PRIMARY KEY (userID, propertyID),
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (propertyID) REFERENCES properties(id)
 
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.run(`CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    address TEXT NOT NULL,
    price TEXT NOT NULL,
    beds TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
});


// Read JSON data from file
fs.readFile('listings.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Failed to read file:", err);
        return;
    }
    // Parse JSON data
    const listings = JSON.parse(data);

    // Insert data into the database
    listings.forEach(listing => {
        db.run(`INSERT OR IGNORE INTO properties (title, image, address, price, beds) VALUES (?, ?, ?, ?, ?)`, [listing.title, listing.image, listing.address, listing.price, listing.beds], function(err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`A row has been inserted with rowid ${this.lastID}`);
            }
        });
    });
});


// Close the database connection
// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });
