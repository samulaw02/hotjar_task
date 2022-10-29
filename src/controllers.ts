import express from 'express';
// serve contents of directories in pages as separate url
export const serveDirectories = express.static("pages");
