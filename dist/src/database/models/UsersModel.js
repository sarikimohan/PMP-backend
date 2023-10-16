"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsersSchema_1 = __importDefault(require("../schemas/UsersSchema"));
const UsersModel = (0, mongoose_1.model)('newUsers', UsersSchema_1.default);
exports.default = UsersModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvVXNlcnNNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUFpQztBQUNqQyx5RUFBaUQ7QUFFakQsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBQyxxQkFBVyxDQUFDLENBQUE7QUFFaEQsa0JBQWUsVUFBVSxDQUFBIn0=