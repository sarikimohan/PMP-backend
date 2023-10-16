"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRoutes = void 0;
const common_routes_config_1 = require("../../../common/common.routes.config");
const blogs_controller_1 = __importDefault(require("./controllers/blogs.controller"));
const blogs_middleware_1 = __importDefault(require("./middleware/blogs.middleware"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
class BlogsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "BlogsRoutes");
    }
    configureRoutes() {
        this.app.route(`/blogs/post`).post(upload.array('file'), blogs_middleware_1.default.verifyAuth, blogs_controller_1.default.createBlog);
        return this.app;
    }
}
exports.BlogsRoutes = BlogsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3Mucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3MvYmxvZ3Mucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrRUFBMEU7QUFFMUUsc0ZBQTZEO0FBQzdELHFGQUE0RDtBQUM1RCxvREFBNEI7QUFFNUIsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQTtBQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUN6QyxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNwQiwwQkFBZSxDQUFDLFVBQVUsRUFDMUIsMEJBQWUsQ0FBQyxVQUFVLENBQzNCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBZEQsa0NBY0MifQ==