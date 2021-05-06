import { Request, Response } from "express";
import "./mongo";
import * as mongoClient from "../models";
import { MongoModel } from "../models/Types";

// console.log(Object.keys(mongoClient));
export interface Context {
  testing: string;
  mongoClient: MongoModel;
}

export function context(req: Request, res: Response): Context {
  return {
    testing: "aaaa",
    mongoClient,
  }
}

