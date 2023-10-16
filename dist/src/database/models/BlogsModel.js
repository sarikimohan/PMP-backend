"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogsSchema_1 = __importDefault(require("../schemas/BlogsSchema"));
const BlogsModel = (0, mongoose_1.model)('Blogs', BlogsSchema_1.default);
exports.default = BlogsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ3NNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvQmxvZ3NNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUFpQztBQUNqQyx5RUFBaUQ7QUFFakQsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBSyxFQUFDLE9BQU8sRUFBQyxxQkFBVyxDQUFDLENBQUE7QUFFN0Msa0JBQWUsVUFBVSxDQUFBIn0=