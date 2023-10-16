"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserProfileSchema_1 = __importDefault(require("../schemas/UserProfileSchema"));
const UserProfileModel = (0, mongoose_1.model)('UserProfile', UserProfileSchema_1.default);
exports.default = UserProfileModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGVNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvVXNlclByb2ZpbGVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUFpQztBQUVqQyxxRkFBNkQ7QUFFN0QsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLGdCQUFLLEVBQUMsYUFBYSxFQUFDLDJCQUFpQixDQUFDLENBQUE7QUFFL0Qsa0JBQWUsZ0JBQWdCLENBQUEifQ==