"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_service_1 = require("./fs.service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/users", async (req, res) => {
    try {
        const users = await (0, fs_service_1.read)();
        res.send(users);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const users = await (0, fs_service_1.read)();
        const id = users[users.length - 1].id + 1;
        const newUser = { id, name, email, password };
        await (0, fs_service_1.write)(users);
        users.push(newUser);
        res.status(201).send(newUser);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.get("/users/:userId", async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await (0, fs_service_1.read)();
        const user = users.find((user) => user.id === userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.put("/users/:userId", async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await (0, fs_service_1.read)();
        const userIndex = users.findIndex((user) => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send("User not found");
        }
        const { name, email, password } = req.body;
        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].password = password;
        await (0, fs_service_1.write)(users);
        res.status(201).send(users[userIndex]);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.delete("/users/:userId", async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await (0, fs_service_1.read)();
        const userIndex = users.findIndex((user) => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send("User not found");
        }
        users.splice(userIndex, 1);
        await (0, fs_service_1.write)(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});
