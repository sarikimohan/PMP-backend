"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlogsModel_1 = __importDefault(require("../../../database/models/BlogsModel"));
class BlogsVerifyUser {
    verifyUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reqId = res.locals.userId.userId;
                const userId = yield BlogsModel_1.default.findOne({ _id: req.body.blogId });
                if (userId && reqId === userId.userId + "") {
                    next();
                }
                else {
                    throw new Error('User not authorized to deleted the blog');
                }
            }
            catch (err) {
                console.log(err);
                res.status(401).send(err);
            }
        });
    }
}
exports.default = new BlogsVerifyUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MudmVyaWZ5VXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3MvbWlkZGxld2FyZS9ibG9ncy52ZXJpZnlVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUZBQTREO0FBRTVELE1BQU0sZUFBZTtJQUNiLFVBQVUsQ0FDZCxHQUFtQixFQUNuQixHQUFvQixFQUNwQixJQUF5Qjs7WUFFekIsSUFBRztnQkFDRCxNQUFNLEtBQUssR0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7Z0JBQ3JDLE1BQU0sTUFBTSxHQUFFLE1BQU0sb0JBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFBO2dCQUM3RCxJQUFHLE1BQU0sSUFBRSxLQUFLLEtBQUcsTUFBTSxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7b0JBQ2xDLElBQUksRUFBRSxDQUFBO2lCQUNQO3FCQUFJO29CQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTtpQkFDM0Q7YUFDRjtZQUNELE9BQU0sR0FBRyxFQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzFCO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FBQSJ9