import { Request, Response } from "express";
import { join } from "path";

// store the last pageToRender that was rendered
let pages: string[] = ["control.html", "variant1.html"];
let index: number = 1;

export const serveControl = (req: Request, res: Response) =>
  res.sendFile(join(__dirname, '..', "pages", "pricing", "control.html"));

export const serveVariant = (req: Request, res: Response) =>
  res.sendFile(join(__dirname, '..', "pages", "pricing", "variant1.html"));

export const servePricing = (req: Request, res: Response) => {
  // if this is user's first time, assign them a page and increment the index
  if (!req.session.page) {
    req.session.page = pages[index % 2];
    index++;
  }
  res.sendFile(join(__dirname, '..', "pages", "pricing", req.session.page));
};