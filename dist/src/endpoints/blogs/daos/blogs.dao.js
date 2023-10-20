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
class BlogsDao {
    addBlog(blog, userId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("blog:",blog)
            const images = req.files;
            yield BlogsModel_1.default.create({
                userId: userId,
                title: blog.title,
                description: blog.description,
                imageOneURI: {
                    data: images.imageOne == undefined ? null : images.imageOne[0].buffer,
                    contentType: images.imageOne == undefined ? null : images.imageOne[0].mimetype,
                },
                imageTwoURI: {
                    data: images.imageTwo == undefined ? null : images.imageTwo[0].buffer,
                    contentType: images.imageTwo == undefined ? null : images.imageTwo[0].mimetype,
                },
                publishTime: new Date(),
            });
            return;
        });
    }
    updateBlog(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogData = req.body;
            const blog = yield BlogsModel_1.default.findOne({ _id: blogData.blogId });
            if (blog) {
                if (blogData.title) {
                    blog.title = blogData.title;
                }
                if (blogData.description) {
                    blog.description = blogData.description;
                }
                const images = req.files;
                if (images) {
                    if (images.imageOne != undefined) {
                        blog.imageOneURI.data = images.imageOne[0].buffer;
                        blog.imageOneURI.contentType = images.imageOne[0].mimetype;
                    }
                    if (images.imageTwo != undefined) {
                        (blog.imageTwoURI.data = images.imageTwo[0].buffer),
                            (blog.imageTwoURI.contentType = images.imageTwo[0].mimetype);
                    }
                }
                yield blog.save();
            }
        });
    }
    deleteBlog(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BlogsModel_1.default.deleteOne({ _id: blogId });
            return;
        });
    }
    getBlogs(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("userId", userId);
            const blogs = yield BlogsModel_1.default.find({ userId: userId });
            const result = blogs.map((v) => {
                return {
                    _id: v._id,
                    title: v.title,
                    description: v.description,
                    imageOneUrl: v.imageOneURI == undefined
                        ? ""
                        : `data:${v.imageOneURI.contentType};base64,${v.imageOneURI.data == null
                            ? ""
                            : v.imageOneURI.data.toString("base64")}`,
                    imageTwoUrl: v.imageTwoURI == undefined
                        ? ""
                        : `data:${v.imageTwoURI.contentType};base64,${v.imageTwoURI.data == null
                            ? ""
                            : v.imageTwoURI.data.toString("base64")}`,
                };
            });
            // console.log(blogs)
            return result;
        });
    }
    getAllBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const blogs = (yield BlogsModel_1.default.find()).reverse();
            const result = blogs.map((v) => {
                return {
                    _id: v._id,
                    title: v.title,
                    description: v.description,
                    imageOneUrl: v.imageOneURI == undefined
                        ? ""
                        : `data:${v.imageOneURI.contentType};base64,${v.imageOneURI.data == null
                            ? ""
                            : v.imageOneURI.data.toString("base64")}`,
                    imageTwoUrl: v.imageTwoURI == undefined
                        ? ""
                        : `data:${v.imageTwoURI.contentType};base64,${v.imageTwoURI.data == null
                            ? ""
                            : v.imageTwoURI.data.toString("base64")}`,
                };
            });
            // console.log(blogs)
            return result;
        });
    }
}
exports.default = new BlogsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9ibG9ncy9kYW9zL2Jsb2dzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUE2RDtBQUk3RCxNQUFNLFFBQVE7SUFDTixPQUFPLENBQUMsSUFBbUIsRUFBRSxNQUFjLEVBQUUsR0FBb0I7O1lBQ3JFLDRCQUE0QjtZQUU1QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBdUQsQ0FBQztZQUUzRSxNQUFNLG9CQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN0QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsV0FBVyxFQUFFO29CQUNYLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07b0JBQ3JFLFdBQVcsRUFDVCxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7aUJBQ3BFO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUNyRSxXQUFXLEVBQ1QsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxR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