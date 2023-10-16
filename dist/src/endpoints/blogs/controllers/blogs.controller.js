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
            console.log(images);
            console.log("fileData:", images[0].buffer);
            yield blogs_service_1.default.Create(req.body, userId.userId, req);
            res.sendStatus(200);
        });
    }
}
exports.default = new BlogsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3MvY29udHJvbGxlcnMvYmxvZ3MuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDhFQUFvRDtBQUVwRCxNQUFNLGVBQWU7SUFDYixVQUFVLENBQUMsR0FBbUIsRUFBQyxHQUFvQjs7WUFFdkQsTUFBTSxNQUFNLEdBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDL0IsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQThCLENBQUE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekMsTUFBTSx1QkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDckQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksZUFBZSxDQUFBIn0=