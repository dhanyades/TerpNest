// server.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./db/terp.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

app.get('/properties', (req, res) => {
    db.all("SELECT * FROM properties", [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

app.post('/users', (req, res) => {
    const { fullName, email, password, gender, semester } = req.body;
    const sql = `INSERT INTO users (fullName, email, password, gender, semester) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [fullName, email, password, gender, semester], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID });
    });
});

app.post('/preferences', (req, res) => {
    const { userId, morning, social, clean, diet, allergy } = req.body;
    const sql = `
        INSERT INTO preferences (userId, morning, social, clean, allergy) 
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(userId) 
        DO UPDATE SET 
            morning=excluded.morning,
            social=excluded.social,
            clean=excluded.clean,
            allergy=excluded.allergy;
    `;

    db.run(sql, [userId, morning, social, clean, diet, allergy], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ success: true, message: 'Preferences updated', id: this.lastID });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
