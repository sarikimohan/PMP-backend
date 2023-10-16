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
const blogs_dao_1 = __importDefault(require("../daos/blogs.dao"));
class BlogsService {
    Create(resource, UserId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            blogs_dao_1.default.addBlog(resource, UserId, req);
        });
    }
}
exports.default = new BlogsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3Mvc2VydmljZXMvYmxvZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUl6QyxNQUFNLFlBQVk7SUFDVixNQUFNLENBQUMsUUFBdUIsRUFBQyxNQUFhLEVBQUMsR0FBbUI7O1lBQ3BFLG1CQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkMsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksQ0FBQSJ9