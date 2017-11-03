import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import Order from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'PeoTrack, the personal order tracking app that is a joy to use.';

  constructor(private storage: StorageService){

    document.addEventListener("deviceready", () => {

      // open database connection
      storage.openDB("peotrack");

      // create database tables
      storage.query(`CREATE TABLE IF NOT EXIST order (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        clientId INTEGER,
        created_at TEXT,
        status TEXT
      )`, [],
      (tx, rs) => {
        console.log("rows affected" + rs.rowsAffected);
      },
      (tx, err) => {
        console.log(err);
      });

      // create database tables
      storage.query(`CREATE TABLE IF NOT EXIST client (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullname TEXT,
        phone TEXT,
        email TEXT,
        address TEXT
      )`, [],
      (tx, rs) => {
        console.log("rows affected" + rs.rowsAffected);
      },
      (tx, err) => {
        console.log(err);
      });

      // create database tables
      storage.query(`CREATE TABLE IF NOT EXIST item (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId INTEGER,
        name TEXT,
        sellPrice REAL,
        buyPrice REAL
      )`, [],
      (tx, rs) => {
        console.log("rows affected" + rs.rowsAffected);
      },
      (tx, err) => {
        console.log(err);
      });

      // create database tables
      storage.query(`CREATE TABLE IF NOT EXIST product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE
      )`, [],
      (tx, rs) => {
        console.log("rows affected" + rs.rowsAffected);
      },
      (tx, err) => {
        console.log(err);
      });

      // close database connection
      storage.closeDB();
    });
  }
}

