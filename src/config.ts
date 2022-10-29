import { SessionOptions } from "express-session";
import express from "express";

export const app = express();

export const sessionOptions: SessionOptions = {
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: true, 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365, // expires in one year
  }
};