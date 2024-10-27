import fs from "node:fs/promises";
import path from "node:path";

import { IUser } from "../interfaces/user.interface";

const read = async (): Promise<IUser[]> => {
  try {
    const pathToFile = path.join(process.cwd(), "db.json");
    const data = await fs.readFile(pathToFile, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("read mistake", e.message);
  }
};

const write = async (users: IUser[]): Promise<void> => {
  try {
    const pathToFile = path.join(process.cwd(), "db.json");
    await fs.writeFile(pathToFile, JSON.stringify(users));
  } catch (e) {
    console.log("write mistake", e.message);
  }
};

export { read, write };
