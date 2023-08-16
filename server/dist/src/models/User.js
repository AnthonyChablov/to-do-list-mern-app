"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    id: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // select: false makes sure that email/pw is not returned to Frontend
    // unique: true makes it so we can only store only one email in out db
    email: { type: String, required: true, unique: true, select: false },
    password: { type: String, required: true, select: false },
});
exports.default = (0, mongoose_1.model)("User", UserSchema);
