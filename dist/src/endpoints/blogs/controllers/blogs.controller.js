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
const blogs_service_1 = __importDefault(require("../services/blogs.service"));
class BlogsController {
    createBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.userId;
            const images = req.files;
            // console.log("fileData:",images.imageOne)
            yield blogs_service_1.default.Create(req.body, userId.userId, req);
            res.sendStatus(200);
        });
    }
    deleteBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield blogs_service_1.default.delete(req.body.blogId);
            res.sendStatus(200);
        });
    }
    getBlogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogs = yield blogs_service_1.default.get(res.locals.userId.userId);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(blogs);
        });
    }
    updateBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield blogs_service_1.default.update(req);
            res.status(200).send();
        });
    }
    getAllBlogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogs = yield blogs_service_1.default.getAllBlogs();
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(blogs);
        });
    }
}
exports.default = new BlogsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3MvY29udHJvbGxlcnMvYmxvZ3MuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDhFQUFvRDtBQUdwRCxNQUFNLGVBQWU7SUFDYixVQUFVLENBQUMsR0FBbUIsRUFBQyxHQUFvQjs7WUFFdkQsTUFBTSxNQUFNLEdBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDL0IsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQXFELENBQUE7WUFFeEUsMkNBQTJDO1lBQzNDLE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JELEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW1CLEVBQUMsR0FBb0I7O1lBQ3ZELE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFtQixFQUFDLEdBQW9COztZQUNyRCxNQUFNLEtBQUssR0FBRyxNQUFNLHVCQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzlELEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW1CLEVBQUMsR0FBb0I7O1lBQ3ZELE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN4QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBbUIsRUFBQyxHQUFvQjs7WUFDeEQsTUFBTSxLQUFLLEdBQUcsTUFBTSx1QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FBQSJ9