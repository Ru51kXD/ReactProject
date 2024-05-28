import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const dbDir = `${FileSystem.documentDirectory}SQLite/`;
const dbName = "events.db";

async function openDatabase() {
  const dirInfo = await FileSystem.getInfoAsync(dbDir);
  if (!dirInfo.exists) {
    console.log("Creating directory:", dbDir);
    await FileSystem.makeDirectoryAsync(dbDir);
  } else {
    console.log("Directory already exists:", dbDir);
  }

  const db = await SQLite.openDatabaseAsync(dbName);
  if (!db) {
    throw new Error("Failed to open database");
  }
  console.log("Database opened:", dbName);
  return db;
}

export const createTables = async () => {
  const db = await openDatabase();
  db.execAsync(
    "CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, number INTEGER, price TEXT);"
  );
  db.execAsync(
    "CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY AUTOINCREMENT, eventId INTEGER, FOREIGN KEY (eventId) REFERENCES events (id));"
  );
};

export const RemoveALlEvents = async () => {
  const db = await openDatabase();
  db.runAsync("DELETE FROM events WHERE id > 0");
};

export const addEvent = async (title, date, number, price) => {
  const db = await openDatabase();
  db.runAsync(
    "INSERT INTO events (title, date, number, price) VALUES (?, ?, ?, ?)",
    [title, date, number, price]
  );
};

export const getEvents = async () => {
  const db = await openDatabase();
  const allRows = await db.getAllAsync("SELECT * FROM events");
  return allRows;
};

export const addBooking = async (eventId) => {
  const db = await openDatabase();
  console.log(eventId);
  db.runAsync("INSERT INTO bookings (eventId) VALUES (?)", [eventId]);
};

export const getBookings = async () => {
  const db = await openDatabase();
  const allRows = await db.getAllAsync(
    "SELECT bookings.id, events.title, events.date, events.number, events.price FROM bookings JOIN events ON bookings.eventId = events.id"
  );
  console.log(allRows);
  return allRows;
};

export const deleteBooking = async (id) => {
  const db = await openDatabase();
  db.runAsync("DELETE FROM bookings WHERE id = ?", [id]);
};
