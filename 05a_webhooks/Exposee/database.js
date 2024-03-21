import sqlite3 from 'sqlite3';

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE webhooks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event_type TEXT,
            callback_url TEXT
          )`);
});

function registerWebhook(eventType, callbackUrl) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO webhooks (event_type, callback_url) VALUES (?, ?)`;
    db.run(query, [eventType, callbackUrl], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID });
      }
    });
  });
}

function unregisterWebhook(eventType, callbackUrl) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM webhooks WHERE event_type = ? AND callback_url = ?`;
    db.run(query, [eventType, callbackUrl], function(err) {
      if (err) {
        console.error("Error during unregistration:", err);
        reject(err);
      } else {
        console.log(`Unregistered webhook for ${eventType} event, callback URL: ${callbackUrl}`);
        resolve({ changes: this.changes });
      }
    });
  });
}

export function getAllWebhooks() {
  return new Promise((resolve, reject) => {
    const query = `SELECT DISTINCT callback_url FROM webhooks`;
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// ES Module export
export { registerWebhook, unregisterWebhook };


