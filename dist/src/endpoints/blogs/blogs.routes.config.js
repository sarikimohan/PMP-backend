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
const blogs_verifyUser_1 = __importDefault(require("./middleware/blogs.verifyUser"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
class BlogsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "BlogsRoutes");
    }
    configureRoutes() {
        this.app.route(`/blogs/post`).post(upload.fields([
            { name: 'imageOne', maxCount: 1 },
            { name: 'imageTwo', maxCount: 1 }
        ]), blogs_middleware_1.default.verifyAuth, blogs_controller_1.default.createBlog);
        this.app.route(`/blogs/delete`).delete(blogs_middleware_1.default.verifyAuth, blogs_verifyUser_1.default.verifyUser, blogs_controller_1.default.deleteBlog);
        this.app.route(`/blogs/get`).get(blogs_middleware_1.default.verifyAuth, blogs_controller_1.default.getBlogs);
        this.app.route(`/blogs/getAllBlogs`).get(blogs_controller_1.default.getAllBlogs);
        this.app.route(`/blogs/update`).patch(upload.fields([
            { name: 'imageOne', maxCount: 1 },
            { name: 'imageTwo', maxCount: 1 }
        ]), blogs_middleware_1.default.verifyAuth, blogs_verifyUser_1.default.verifyUser, blogs_controller_1.default.updateBlog);
        return this.app;
    }
}
exports.BlogsRoutes = BlogsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3Mucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYmxvZ3MvYmxvZ3Mucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrRUFBMEU7QUFFMUUsc0ZBQTZEO0FBQzdELHFGQUE0RDtBQUM1RCxvREFBNEI7QUFDNUIscUZBQTREO0FBRTVELE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsYUFBYSxFQUFFLENBQUE7QUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7QUFDekMsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO1NBQzdCLENBQUMsRUFDRiwwQkFBZSxDQUFDLFVBQVUsRUFDMUIsMEJBQWUsQ0FBQyxVQUFVLENBQzNCLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQ3BDLDBCQUFlLENBQUMsVUFBVSxFQUMxQiwwQkFBZSxDQUFDLFVBQVUsRUFDMUIsMEJBQWUsQ0FBQyxVQUFVLENBQzNCLENBQUE7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQzlCLDBCQUFlLENBQUMsVUFBVSxFQUMxQiwwQkFBZSxDQUFDLFFBQVEsQ0FDekIsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUN0QywwQkFBZSxDQUFDLFdBQVcsQ0FDNUIsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO1NBQzdCLENBQUMsRUFDRiwwQkFBZSxDQUFDLFVBQVUsRUFDMUIsMEJBQWUsQ0FBQyxVQUFVLEVBQzFCLDBCQUFlLENBQUMsVUFBVSxDQUMzQixDQUFBO1FBR0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQTNDRCxrQ0EyQ0MifQ==