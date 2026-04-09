import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function createTable(){
    const db = await open({
        filename: path.join( 'database.db'),
        driver: sqlite3.Database
    })

// To create products table with the following columns:
await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,  
        artist TEXT NOT NULL, 
        price REAL NOT NULL, 
        image TEXT NOT NULL,
        year INTEGER,
        genre TEXT,
        stock INTEGER 
    )`)
/*

await db.exec(`
            CREATE TABLE if NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
      `)
*/


    await db.close();
    console.log('Table created successfully');

};
    createTable()